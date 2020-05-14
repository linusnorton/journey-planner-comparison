import { Journey } from "../App/Results/JourneyResult/JourneyResult";
import { Leg } from "../App/Results/JourneyResult/LegResult/LegResult";

export function convertOtrl(response: any) {
  return {
    outboundJourneyList: response.result.outward
      .map((j: any) => convertJourney(j, response.links))
      .sort((a: Journey, b: Journey) => a.departureDateTime > b.departureDateTime ? 1 : -1),
    inboundJourneyList: response.result.return
        .map((j: any) => convertJourney(j, response.links))
        .sort((a: Journey, b: Journey) => a.departureDateTime > b.departureDateTime ? 1 : -1)
  };
}

function convertJourney(jf: any, links: any): Journey {
  return {
    departureDateTime: otrlDateTime(links[jf.journey].origin.time.scheduledTime),
    arrivalDateTime: otrlDateTime(links[jf.journey].destination.time.scheduledTime),
    journeyFareList: [{
      farePrice: jf.fares.cheapest.totalPrice / 100,
      cheapest: true
    }],
    tisSegmentList: links[jf.journey].legs.map((l: any) => convertLeg(l, links))
  };
}

function otrlDateTime(dateTime: string) {
  return dateTime.replace("T", " ");
}

function convertLeg(leg: any, links: any): Leg {
  return {
    departureDateTime: leg.fixed ? "" : otrlDateTime(leg.origin[0].time.scheduledTime),
    arrivalDateTime: leg.fixed ? "" : otrlDateTime(leg.destination[0].time.scheduledTime),
    dptStation: {
      nlcCode: links[leg.origin[0].station].nlc,
      crsCode: links[leg.origin[0].station].crs,
    },
    arrStation: {
      nlcCode: links[leg.destination[0].station].nlc,
      crsCode: links[leg.destination[0].station].crs,
    },
    segmentType: leg.fixed ? 1 : 0,
    durationMinutes: leg.transferTime,
    tisCallingPointList: []
  }
}
