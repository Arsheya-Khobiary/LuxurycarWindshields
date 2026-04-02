/**
 * UK automotive glazing terms (British English).
 * Nearside = kerb side (left in RHD). Offside = driver’s side (right in RHD).
 */
export type GlassOptionId =
  | 'front_windscreen'
  | 'driver_front_door'
  | 'passenger_front_door'
  | 'rear_windscreen'
  | 'rear_nearside_door'
  | 'rear_offside_door'
  | 'nearside_rear_quarter'
  | 'offside_rear_quarter'
  | 'tailgate_boot_quarter';

export interface GlassOption {
  id: GlassOptionId;
  label: string;
  /** Plain-English UK industry wording */
  ukDescription: string;
}

export const UK_CAR_GLASS_OPTIONS: GlassOption[] = [
  {
    id: 'front_windscreen',
    label: 'Front windscreen',
    ukDescription: 'Main laminated screen at the front of the vehicle.',
  },
  {
    id: 'driver_front_door',
    label: "Driver’s front door glass",
    ukDescription: 'Offside front door window — driver’s side in UK right-hand-drive.',
  },
  {
    id: 'passenger_front_door',
    label: 'Front passenger door glass',
    ukDescription: 'Nearside front door window — kerb / passenger side in UK RHD.',
  },
  {
    id: 'rear_windscreen',
    label: 'Rear windscreen',
    ukDescription: 'Heated or plain rear window / back screen (not the interior mirror).',
  },
  {
    id: 'rear_nearside_door',
    label: 'Rear nearside door glass',
    ukDescription: 'Rear passenger-side door window (kerb side, left in RHD).',
  },
  {
    id: 'rear_offside_door',
    label: 'Rear offside door glass',
    ukDescription: 'Rear driver’s-side door window (right in RHD).',
  },
  {
    id: 'nearside_rear_quarter',
    label: 'Nearside rear quarter light',
    ukDescription: 'Small fixed or opening pane behind the rear nearside door (sometimes called a quarter glass).',
  },
  {
    id: 'offside_rear_quarter',
    label: 'Offside rear quarter light',
    ukDescription: 'Small fixed or opening pane behind the rear offside door.',
  },
  {
    id: 'tailgate_boot_quarter',
    label: 'Tailgate / boot quarter glass',
    ukDescription: 'Small pane in the tailgate, boot lid, or rear hatch (centre or “mini” rear screen area).',
  },
];

export function glassLabelById(id: string): string {
  return UK_CAR_GLASS_OPTIONS.find((g) => g.id === id)?.label ?? id;
}
