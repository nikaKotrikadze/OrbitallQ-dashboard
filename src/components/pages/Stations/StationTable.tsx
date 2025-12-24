import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type OpsRisk = "LOW" | "MEDIUM" | "HIGH";
type RiskFilter = "ALL" | OpsRisk;

type StationRow = {
  id: string;
  name: string;
  location: string;
  weather: {
    condition: string;
    temperatureC: number;
    windSpeedKmh: number;
  };
  opsRisk: OpsRisk;
  lastUpdatedMinutesAgo: number;
};

const riskBadgeClasses: Record<OpsRisk, string> = {
  LOW: "bg-green-50 text-green-700 border-green-100",
  MEDIUM: "bg-yellow-50 text-yellow-700 border-yellow-100",
  HIGH: "bg-red-50 text-red-700 border-red-100",
};

function RiskBadge({ risk }: { risk: OpsRisk }) {
  return (
    <span
      className={[
        "inline-flex items-center justify-center",
        "px-3 py-1 rounded-full border",
        "text-xs font-semibold tracking-wide",
        riskBadgeClasses[risk],
      ].join(" ")}
    >
      {risk}
    </span>
  );
}

export default function StationsTable() {
  // Replace with your imported JSON (or Zustand stations)
  const rows: StationRow[] = [
    {
      id: "colorado-springs",
      name: "Colorado Springs",
      location: "Colorado, USA",
      weather: { condition: "Clear", temperatureC: 18, windSpeedKmh: 22 },
      opsRisk: "MEDIUM",
      lastUpdatedMinutesAgo: 10,
    },
    {
      id: "vandenberg-sfb",
      name: "Vandenberg SFB",
      location: "California, USA",
      weather: { condition: "Overcast", temperatureC: 15, windSpeedKmh: 35 },
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
      weather: { condition: "Clear", temperatureC: 26, windSpeedKmh: 18 },
      opsRisk: "LOW",
      lastUpdatedMinutesAgo: 12,
    },
    {
      id: "cape-verde",
      name: "Cape Verde",
      location: "West Africa",
      weather: { condition: "Clear", temperatureC: 24, windSpeedKmh: 15 },
      opsRisk: "LOW",
      lastUpdatedMinutesAgo: 15,
    },
  ];

  const [search, setSearch] = useState("");
  const [riskFilter, setRiskFilter] = useState<RiskFilter>("ALL");

  const filteredRows = useMemo(() => {
    const q = search.trim().toLowerCase();

    return rows.filter((r) => {
      const matchesSearch =
        q.length === 0 ||
        r.name.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);

      const matchesRisk = riskFilter === "ALL" || r.opsRisk === riskFilter;

      return matchesSearch && matchesRisk;
    });
  }, [rows, search, riskFilter]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xl">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {/* simple magnifier */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16.5 16.5 21 21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stations..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Risk filter */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600">
            Filter by Risk:
          </span>

          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value as RiskFilter)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="ALL">All Levels</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-800">
                Station Name
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-800">
                Location
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-800">
                Current Weather
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-800">
                Ops Risk
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-800">
                Last Updated
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.length === 0 ? (
              <tr>
                <td className="px-5 py-10 text-sm text-gray-500" colSpan={5}>
                  No stations match your search/filter.
                </td>
              </tr>
            ) : (
              filteredRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <Link
                      to={`/stations/${row.id}`}
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      {row.name}
                    </Link>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-900">
                    {row.location}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-900">
                    {row.weather.condition}, {row.weather.temperatureC}°C,{" "}
                    {row.weather.windSpeedKmh} km/h winds
                  </td>

                  <td className="px-5 py-4">
                    <RiskBadge risk={row.opsRisk} />
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {row.lastUpdatedMinutesAgo} min ago
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Footer count */}
      <div className="mt-3 text-xs text-gray-500">
        Showing {filteredRows.length} of {rows.length} stations
      </div>
    </div>
  );
}
