export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type Station = {
  id: string;
  name: string;
  location: { lat: number; lon: number };
  weather: {
    temperatureC: number;
    windSpeedKmh: number;
    precipitationMmH: number;
    cloudCoverPercent: number;
  };
  risk: {
    level: RiskLevel;
    message: string;
  };
  recommendedAction: string;
  lastUpdated: string;
};

export const STATIONS: Station[] = [
  {
    id: "cos",
    name: "Colorado Springs",
    location: { lat: 38.8339, lon: -104.8214 },
    weather: {
      temperatureC: 18,
      windSpeedKmh: 22,
      precipitationMmH: 0,
      cloudCoverPercent: 35,
    },
    risk: {
      level: "MEDIUM",
      message: "Moderate winds may affect antenna operations",
    },
    recommendedAction: "Monitor conditions and prepare backup ground station",
    lastUpdated: "2025-12-19T21:37:00Z",
  },
  {
    id: "vandenberg",
    name: "Vandenberg SFB",
    location: { lat: 34.742, lon: -120.5724 },
    weather: {
      temperatureC: 15,
      windSpeedKmh: 35,
      precipitationMmH: 5,
      cloudCoverPercent: 75,
    },
    risk: {
      level: "HIGH",
      message: "High winds and poor visibility may disrupt antenna operations",
    },
    recommendedAction:
      "Activate backup ground station and postpone non-critical passes",
    lastUpdated: "2025-12-19T21:41:00Z",
  },
  {
    id: "ascension",
    name: "Ascension Island",
    location: { lat: -7.9467, lon: -14.3559 },
    weather: {
      temperatureC: 28,
      windSpeedKmh: 12,
      precipitationMmH: 0,
      cloudCoverPercent: 20,
    },
    risk: {
      level: "LOW",
      message: "Weather conditions are optimal for operations",
    },
    recommendedAction: "Proceed with scheduled satellite passes",
    lastUpdated: "2025-12-19T21:41:00Z",
  },
];

export type TableStation = {
  id: string;
  name: string;
  location: string;
  weather: {
    condition: string;
    temperatureC: number;
    windSpeedKmh: number;
  };
  opsRisk: string;
  lastUpdatedMinutesAgo: number;
};

export const TABLESTATIONS: TableStation[] = [
  {
    id: "colorado-springs",
    name: "Colorado Springs",
    location: "Colorado, USA",
    weather: {
      condition: "Clear",
      temperatureC: 18,
      windSpeedKmh: 22,
    },
    opsRisk: "MEDIUM",
    lastUpdatedMinutesAgo: 10,
  },
  {
    id: "vandenberg-sfb",
    name: "Vandenberg SFB",
    location: "California, USA",
    weather: {
      condition: "Overcast",
      temperatureC: 15,
      windSpeedKmh: 35,
    },
    opsRisk: "HIGH",
    lastUpdatedMinutesAgo: 5,
  },
  {
    id: "ascension-island",
    name: "Ascension Island",
    location: "South Atlantic",
    weather: {
      condition: "Partly cloudy",
      temperatureC: 28,
      windSpeedKmh: 12,
    },
    opsRisk: "LOW",
    lastUpdatedMinutesAgo: 8,
  },
  {
    id: "kauai",
    name: "Kauai",
    location: "Hawaii, USA",
    weather: {
      condition: "Clear",
      temperatureC: 26,
      windSpeedKmh: 18,
    },
    opsRisk: "LOW",
    lastUpdatedMinutesAgo: 12,
  },
  {
    id: "cape-verde",
    name: "Cape Verde",
    location: "West Africa",
    weather: {
      condition: "Clear",
      temperatureC: 24,
      windSpeedKmh: 15,
    },
    opsRisk: "LOW",
    lastUpdatedMinutesAgo: 15,
  },
];
