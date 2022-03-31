import React from 'react'
import { cloneDeep } from 'lodash'
import {
  insertConditionsFromSearchParams,
  parseEntityIdFromSqlStatement,
  SQLOperator,
} from '../../utils/functions/sqlFunctions'
import SynapseTable, { SynapseTableProps } from './SynapseTable'
import { isTableEntity, QueryBundleRequest } from '../../utils/synapseTypes'
import { SynapseConstants } from '../../utils'
import { QueryWrapper, QueryContextConsumer } from '../QueryWrapper'
import TopLevelControls, { TopLevelControlsProps } from './TopLevelControls'
import FullTextSearch from '../FullTextSearch'
import SearchV2, { SearchV2Props } from '../SearchV2'
import { useGetEntity } from '../../utils/hooks/SynapseAPI/useEntity'
import TotalQueryResults from '../TotalQueryResults'
import SqlEditor from '../SqlEditor'
import { useSynapseContext } from '../../utils/SynapseContext'
import {
  QueryVisualizationContextConsumer,
  QueryVisualizationWrapper,
} from '../QueryVisualizationWrapper'

type SearchParams = {
  searchParams?: {
    facetValue: string
  }
}
export type Operator = {
  sqlOperator?: SQLOperator
}

export type QueryCount = {
  showQueryCount?: boolean
}

type OwnProps = {
  sql: string
  rgbIndex: number
  unitDescription?: string
  facetAliases?: Record<string, string>
  showTopLevelControls?: boolean
  searchConfiguration?: Omit<
    SearchV2Props,
    'queryContext' | 'queryVisualizationContext'
  >
} & Omit<TopLevelControlsProps, 'entityId'>

export type StandaloneQueryWrapperProps = Partial<
  Omit<
    SynapseTableProps,
    'synapseContext' | 'queryContext' | 'queryVisualizationContext'
  >
> &
  SearchParams &
  Operator &
  OwnProps

const generateInitQueryRequest = (sql: string): QueryBundleRequest => {
  return cloneDeep({
    partMask:
      SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
      SynapseConstants.BUNDLE_MASK_QUERY_COUNT |
      SynapseConstants.BUNDLE_MASK_QUERY_SELECT_COLUMNS |
      SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
      SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
    entityId: parseEntityIdFromSqlStatement(sql),
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    query: {
      sql,
      limit: 25,
      offset: 0,
    },
  })
}
/**
 * This component was initially implemented on the portal side. It renders a SynapseTable if a title is provided.
 * If showTopLevelControls is set to true, then the SynapseTable will also include the TopLevelControls (search, export table, column selection).
 */
const StandaloneQueryWrapper: React.FunctionComponent<StandaloneQueryWrapperProps> =
  props => {
    const {
      title,
      searchParams,
      sqlOperator,
      showAccessColumn,
      sql,
      hideDownload,
      hideQueryCount,
      name,
      showTopLevelControls = false,
      searchConfiguration,
      unitDescription = 'Results',
      rgbIndex,
      ...rest
    } = props

    const derivedQueryRequestFromSearchParams = generateInitQueryRequest(sql)

    if (searchParams) {
      derivedQueryRequestFromSearchParams.query.sql =
        insertConditionsFromSearchParams(
          derivedQueryRequestFromSearchParams.query.sql,
          searchParams,
          sqlOperator,
        )
    }
    const synapseContext = useSynapseContext()
    const entityId = parseEntityIdFromSqlStatement(sql)
    const { data: entity } = useGetEntity(entityId)
    return (
      <QueryWrapper
        {...rest}
        initQueryRequest={derivedQueryRequestFromSearchParams}
      >
        <QueryVisualizationWrapper
          rgbIndex={rgbIndex}
          unitDescription={unitDescription}
          {...rest}
        >
          <QueryContextConsumer>
            {queryContext => {
              if (queryContext === undefined) {
                throw new Error(
                  'No queryContext found when calling QueryContextConsumer',
                )
              }
              return (
                <QueryVisualizationContextConsumer>
                  {queryVisualizationContext => {
                    if (queryVisualizationContext === undefined) {
                      throw new Error(
                        'No queryVisualizationContext found when calling QueryVisualizationContextConsumer',
                      )
                    }

                    return (
                      <>
                        {title ? (
                          <>
                            {showTopLevelControls && (
                              <TopLevelControls
                                showColumnSelection={true}
                                name={name}
                                hideDownload={hideDownload}
                                hideQueryCount={hideQueryCount}
                                hideFacetFilterControl={true}
                                hideVisualizationsControl={true}
                              />
                            )}
                            {entity &&
                            isTableEntity(entity) &&
                            entity.isSearchEnabled ? (
                              <FullTextSearch />
                            ) : (
                              <SearchV2
                                {...searchConfiguration}
                                queryContext={queryContext}
                                queryVisualizationContext={
                                  queryVisualizationContext
                                }
                              />
                            )}
                            <SqlEditor />
                            {showTopLevelControls && (
                              <TotalQueryResults
                                frontText={''}
                                showNotch={false}
                              />
                            )}
                            <SynapseTable
                              synapseContext={synapseContext}
                              queryContext={queryContext}
                              queryVisualizationContext={
                                queryVisualizationContext
                              }
                              showAccessColumn={showAccessColumn}
                              title={title}
                              data-testid="SynapseTable"
                            />
                          </>
                        ) : (
                          <React.Fragment />
                        )}
                      </>
                    )
                  }}
                </QueryVisualizationContextConsumer>
              )
            }}
          </QueryContextConsumer>
        </QueryVisualizationWrapper>
      </QueryWrapper>
    )
  }

export default StandaloneQueryWrapper
