import React from 'react'
import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "id": "japan",
      "color": "hsl(243, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 211
        },
        {
          "x": "helicopter",
          "y": 12
        },
        {
          "x": "boat",
          "y": 170
        },
        {
          "x": "train",
          "y": 71
        },
        {
          "x": "subway",
          "y": 137
        },
        {
          "x": "bus",
          "y": 281
        },
        {
          "x": "car",
          "y": 131
        },
        {
          "x": "moto",
          "y": 256
        },
        {
          "x": "bicycle",
          "y": 23
        },
        {
          "x": "horse",
          "y": 20
        },
        {
          "x": "skateboard",
          "y": 275
        },
        {
          "x": "others",
          "y": 10
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(37, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 251
        },
        {
          "x": "helicopter",
          "y": 5
        },
        {
          "x": "boat",
          "y": 16
        },
        {
          "x": "train",
          "y": 119
        },
        {
          "x": "subway",
          "y": 168
        },
        {
          "x": "bus",
          "y": 61
        },
        {
          "x": "car",
          "y": 146
        },
        {
          "x": "moto",
          "y": 88
        },
        {
          "x": "bicycle",
          "y": 131
        },
        {
          "x": "horse",
          "y": 211
        },
        {
          "x": "skateboard",
          "y": 217
        },
        {
          "x": "others",
          "y": 184
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(70, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 81
        },
        {
          "x": "helicopter",
          "y": 205
        },
        {
          "x": "boat",
          "y": 208
        },
        {
          "x": "train",
          "y": 170
        },
        {
          "x": "subway",
          "y": 264
        },
        {
          "x": "bus",
          "y": 116
        },
        {
          "x": "car",
          "y": 3
        },
        {
          "x": "moto",
          "y": 196
        },
        {
          "x": "bicycle",
          "y": 160
        },
        {
          "x": "horse",
          "y": 109
        },
        {
          "x": "skateboard",
          "y": 223
        },
        {
          "x": "others",
          "y": 221
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(317, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 265
        },
        {
          "x": "helicopter",
          "y": 176
        },
        {
          "x": "boat",
          "y": 173
        },
        {
          "x": "train",
          "y": 22
        },
        {
          "x": "subway",
          "y": 77
        },
        {
          "x": "bus",
          "y": 146
        },
        {
          "x": "car",
          "y": 16
        },
        {
          "x": "moto",
          "y": 259
        },
        {
          "x": "bicycle",
          "y": 292
        },
        {
          "x": "horse",
          "y": 60
        },
        {
          "x": "skateboard",
          "y": 144
        },
        {
          "x": "others",
          "y": 29
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(53, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 62
        },
        {
          "x": "helicopter",
          "y": 70
        },
        {
          "x": "boat",
          "y": 64
        },
        {
          "x": "train",
          "y": 32
        },
        {
          "x": "subway",
          "y": 108
        },
        {
          "x": "bus",
          "y": 66
        },
        {
          "x": "car",
          "y": 106
        },
        {
          "x": "moto",
          "y": 105
        },
        {
          "x": "bicycle",
          "y": 271
        },
        {
          "x": "horse",
          "y": 247
        },
        {
          "x": "skateboard",
          "y": 149
        },
        {
          "x": "others",
          "y": 290
        }
      ]
    }
  ]

class LineChart extends React.Component {

    render() {
        return (
            <div className="lineChart">
                <ResponsiveLine
                    data={data}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    colors={{ scheme: 'nivo' }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabel="y"
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        )
    }

}

export default LineChart