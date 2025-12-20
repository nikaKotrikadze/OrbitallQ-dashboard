import { create } from "zustand";
import { STATIONS, type Station } from "../data/stations";

type StationState = {
  stations: Station[];
  selectedStationId: string;
  setSelectedStationId: (id: string) => void;
  selectedStation: () => Station | undefined;
};

export const useStationStore = create<StationState>((set, get) => ({
  stations: STATIONS,
  selectedStationId: STATIONS[0].id,
  setSelectedStationId: (id) => set({ selectedStationId: id }),
  selectedStation: () =>
    get().stations.find((s) => s.id === get().selectedStationId),
}));
