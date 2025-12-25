export type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

export type ForecastItem = {
  time: string;
  condition: string;
  temperature: string;
};

export type Station = {
  id: string;
  name: string;

  // Display location (table + header)
  region: string;

  // Precise coordinates (details page)
  coordinates: {
    lat: string;
    lon: string;
  };

  weather: {
    condition: string;
    temperatureC: number;
    windSpeedKmh: number;
    precipitationMmH: number;
    cloudCoverPercent: number;
  };

  risk: {
    level: RiskLevel;
    message: string;
    explanation: string;
  };

  recommendedAction: string;

  rulesApplied: string[];
  foreCast: ForecastItem[];
  impact: string[];

  // ISO string (used everywhere)
  lastUpdated: string;
};

export const STATIONS: Station[] = [
  {
    id: "colorado-springs",
    name: "Colorado Springs",
    region: "Colorado, USA",
    coordinates: { lat: "38.8339° N", lon: "-104.8214° W" },
    weather: {
      condition: "Clear",
      temperatureC: 18,
      windSpeedKmh: 22,
      precipitationMmH: 0,
      cloudCoverPercent: 35,
    },
    risk: {
      level: "MEDIUM",
      message: "Moderate winds may affect antenna operations",
      explanation:
        "Wind speeds of 22 km/h exceed the recommended threshold of 20 km/h for optimal antenna tracking. Cloud cover at 35% is within acceptable limits.",
    },
    rulesApplied: [
      "Wind Speed Threshold: >20 km/h → MEDIUM risk",
      "Cloud Cover Assessment: <50% → Acceptable",
      "Precipitation Check: 0 mm/h → Optimal",
    ],
    foreCast: [
      { time: "12:00", condition: "Partly Cloudy", temperature: "19°C" },
      { time: "15:00", condition: "Partly Cloudy", temperature: "21°C" },
      { time: "18:00", condition: "Clear", temperature: "18°C" },
      { time: "21:00", condition: "Clear", temperature: "15°C" },
    ],
    impact: [
      "Satellite passes scheduled for the next 6 hours should proceed with caution",
      "Antenna tracking accuracy may be reduced by 5-8% due to wind conditions",
      "No impact expected on data downlink rates",
      "Maintenance windows should be postponed until wind speed drops below 15 km/h",
    ],
    recommendedAction: "Monitor conditions and prepare backup ground station",
    lastUpdated: "2025-12-19T21:37:00Z",
  },

  {
    id: "vandenberg-sfb",
    name: "Vandenberg SFB",
    region: "California, USA",
    coordinates: { lat: "34.742° N", lon: "-120.5724° W" },
    weather: {
      condition: "Overcast",
      temperatureC: 15,
      windSpeedKmh: 35,
      precipitationMmH: 5,
      cloudCoverPercent: 75,
    },
    risk: {
      level: "HIGH",
      message: "High winds and poor visibility may disrupt antenna operations",
      explanation:
        "High wind speeds (35 km/h) combined with precipitation (5 mm/h) and heavy cloud cover (75%) create suboptimal conditions for ground station operations.",
    },
    rulesApplied: [
      "Wind Speed Threshold: >30 km/h → HIGH risk",
      "Precipitation Check: >3 mm/h → HIGH risk",
      "Cloud Cover Assessment: >70% → Poor visibility",
    ],
    foreCast: [
      { time: "12:00", condition: "Rain", temperature: "14°C" },
      { time: "15:00", condition: "Rain", temperature: "15°C" },
      { time: "18:00", condition: "Overcast", temperature: "14°C" },
      { time: "21:00", condition: "Cloudy", temperature: "13°C" },
    ],
    impact: [
      "Non-critical satellite passes should be rescheduled",
      "Backup ground station should be activated for mission-critical communications",
      "Antenna tracking may be degraded by 15-20%",
      "All outdoor maintenance activities should be suspended",
    ],
    recommendedAction:
      "Activate backup ground station and postpone non-critical passes",

    lastUpdated: "2025-12-19T21:41:00Z",
  },

  {
    id: "ascension-island",
    name: "Ascension Island",
    region: "South Atlantic",
    coordinates: { lat: "-7.9467° S", lon: "-14.3559° W" },
    weather: {
      condition: "Partly cloudy",
      temperatureC: 28,
      windSpeedKmh: 12,
      precipitationMmH: 0,
      cloudCoverPercent: 20,
    },
    risk: {
      level: "LOW",
      message: "Weather conditions are optimal for operations",
      explanation:
        "All weather parameters are within optimal ranges. Wind speeds are low (12 km/h), no precipitation, and minimal cloud cover (20%).",
    },
    impact: [
      "All satellite passes can proceed as scheduled",
      "Antenna tracking accuracy is optimal",
      "Excellent conditions for data downlink and uplink operations",
      "Maintenance windows can be conducted safely",
    ],
    recommendedAction: "Proceed with scheduled satellite passes",
    rulesApplied: [
      "Wind Speed Threshold: <20 km/h → LOW risk",
      "Cloud Cover Assessment: <50% → Optimal",
      "Precipitation Check: 0 mm/h → Optimal",
    ],
    foreCast: [
      { time: "12:00", condition: "Clear", temperature: "29°C" },
      { time: "15:00", condition: "Clear", temperature: "30°C" },
      { time: "18:00", condition: "Clear", temperature: "28°C" },
      { time: "21:00", condition: "Clear", temperature: "26°C" },
    ],
    lastUpdated: "2025-12-19T21:41:00Z",
  },

  {
    id: "kauai",
    name: "Kauai",
    region: "Hawaii, USA",
    coordinates: { lat: "22.0964° N", lon: "-159.5261° W" },
    weather: {
      condition: "Clear",
      temperatureC: 26,
      windSpeedKmh: 18,
      precipitationMmH: 0,
      cloudCoverPercent: 15,
    },
    risk: {
      level: "LOW",
      message: "Stable conditions",
      explanation: "Low winds, no precipitation, and clear skies.",
    },
    impact: [
      "Ideal conditions for all satellite communications",
      "Antenna tracking accuracy is at maximum performance",
      "No constraints on scheduled satellite passes",
      "Maintenance activities can proceed without weather-related delays",
    ],
    recommendedAction: "Proceed with scheduled satellite passes",
    rulesApplied: [
      "Wind Speed Threshold: <20 km/h → LOW risk",
      "Cloud Cover Assessment: <50% → Optimal",
      "Precipitation Check: 0 mm/h → Optimal",
    ],
    foreCast: [
      { time: "12:00", condition: "Clear", temperature: "27°C" },
      { time: "15:00", condition: "Clear", temperature: "28°C" },
      { time: "18:00", condition: "Clear", temperature: "26°C" },
      { time: "21:00", condition: "Clear", temperature: "24°C" },
    ],
    lastUpdated: "2025-12-19T21:32:00Z",
  },

  {
    id: "cape-verde",
    name: "Cape Verde",
    region: "West Africa",
    coordinates: { lat: "16.5388° N", lon: "-23.0418° W" },
    weather: {
      condition: "Clear",
      temperatureC: 24,
      windSpeedKmh: 15,
      precipitationMmH: 0,
      cloudCoverPercent: 18,
    },
    risk: {
      level: "LOW",
      message: "Optimal operating conditions",
      explanation: "All weather metrics are within optimal thresholds.",
    },
    impact: [
      "All communications systems operating at peak efficiency",
      "No weather-related constraints on satellite operations",
      "Excellent conditions for precision tracking",
      "Full operational capability for all mission types",
    ],
    recommendedAction: "Proceed with scheduled satellite passes",
    rulesApplied: [
      "Wind Speed Threshold: <20 km/h → LOW risk",
      "Cloud Cover Assessment: <50% → Optimal",
      "Precipitation Check: 0 mm/h → Optimal",
    ],
    foreCast: [
      { time: "12:00", condition: "Clear", temperature: "25°C" },
      { time: "15:00", condition: "Clear", temperature: "26°C" },
      { time: "18:00", condition: "Clear", temperature: "24°C" },
      { time: "21:00", condition: "Clear", temperature: "22°C" },
    ],
    lastUpdated: "2025-12-19T21:26:00Z",
  },
];

export const tableStations = STATIONS.map((s) => ({
  id: s.id,
  name: s.name,
  location: s.region,
  currentWeather: `${s.weather.condition}, ${s.weather.temperatureC}°C, ${s.weather.windSpeedKmh} km/h winds`,
  opsRisk: s.risk.level,
  lastUpdatedMinutesAgo: Math.floor(
    (Date.now() - new Date(s.lastUpdated).getTime()) / 60000
  ),
}));
