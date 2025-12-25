export type EventItem = {
  id: string;
  date: string;   // z.B. "01.01.2026 00:00"
  title: string;  // z.B. "Neus Jahr"
  desc: string;   // z.B. "Frohes neues Jahr"
  isPinned?: boolean;
};

export const EVENTS: EventItem[] = [
  {
    id: "newyear-2026",
    date: "01.01.2026 00:00",
    title: "Neus Jahr",
    desc: "Frohes neues Jahr 🎉",
    isPinned: true,
  },
];

export function getNextEvent() {
  // wenn du später echte Datumslogik willst, kann ich das ISO-basiert machen.
  // Für deinen bisherigen Aufbau reicht “erstes Event” oder pinned:
  return EVENTS.find(e => e.isPinned) ?? EVENTS[0] ?? null;
}
