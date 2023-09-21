import { act, render, screen } from '@testing-library/react'
import React from 'react'
import TimelinePlot, { TimelinePlotProps } from './TimelinePlot'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

import { SynapseClient } from '../../index'
import queryResultBundleJson from '../../mocks/query/syn51735464'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const timelineProps: TimelinePlotProps = {
  sql: 'select * from syn123',
  searchParams: {
    resourceId: '9971e47e-976a-4631-8edd-5cae04304b01',
  },
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  defaultSpecies: 'Rattus norvegicus',
}

async function renderTimeline(props: TimelinePlotProps = timelineProps) {
  let component
  // eslint-disable-next-line @typescript-eslint/require-await
  await act(async () => {
    component = render(<TimelinePlot {...props} />, {
      wrapper: createWrapper(),
    })
  })
  return component
}

describe('TimelinePlot tests', () => {
  jest
    .spyOn(SynapseClient, 'getFullQueryTableResults')
    .mockResolvedValue(queryResultBundleJson)

  it('renders all phases of the timeline plot', async () => {
    await renderTimeline()
    expect(SynapseClient.getFullQueryTableResults).toHaveBeenCalledTimes(1),
      expect(await screen.findAllByText('PRENATAL')).toHaveLength(1)
    expect(await screen.findAllByText('NEONATAL')).toHaveLength(1)
    expect(await screen.findAllByText('WEANLING')).toHaveLength(1)
    expect(await screen.findAllByText('JUVENILE')).toHaveLength(1)
    expect(await screen.findAllByText('ADOLESCENT')).toHaveLength(1)
    expect(await screen.findAllByText('ADULT')).toHaveLength(1)
  })

  it('does not render a phase if it has no event data', async () => {
    const newRows = queryResultBundleJson.queryResult?.queryResults.rows.filter(
      row => {
        return row.values[1] != 'juvenile'
      },
    )
    queryResultBundleJson.queryResult!.queryResults.rows = newRows!
    await renderTimeline()
    expect(await screen.findAllByText('PRENATAL')).toHaveLength(1)
    expect(await screen.findAllByText('NEONATAL')).toHaveLength(1)
    expect(await screen.findAllByText('WEANLING')).toHaveLength(1)
    expect(await screen.findAllByText('ADOLESCENT')).toHaveLength(1)
    expect(await screen.findAllByText('ADULT')).toHaveLength(1)

    expect(screen.queryByText('JUVENILE')).not.toBeInTheDocument()
  })
})
