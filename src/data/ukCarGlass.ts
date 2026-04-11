/**
 * Glass types for quote requests (labels shown in the “Which glass?” dropdown).
 */
export type GlassOptionId =
  | 'windscreen'
  | 'left_front_door'
  | 'left_rear_door'
  | 'right_front_door'
  | 'right_rear_door'
  | 'right_front_vent'
  | 'left_front_vent'
  | 'right_rear_quarter'
  | 'left_rear_quarter'
  | 'tailgate_glass';

export interface GlassOption {
  id: GlassOptionId;
  label: string;
  /** Short clarification under the select */
  ukDescription: string;
}

export const UK_CAR_GLASS_OPTIONS: GlassOption[] = [
  {
    id: 'windscreen',
    label: 'Windscreen',
    ukDescription: 'Front laminated screen.',
  },
  {
    id: 'left_front_door',
    label: 'Left front door glass',
    ukDescription: 'Front door window on the left side of the vehicle.',
  },
  {
    id: 'left_rear_door',
    label: 'Left rear door glass',
    ukDescription: 'Rear door window on the left side of the vehicle.',
  },
  {
    id: 'right_front_door',
    label: 'Right front door glass',
    ukDescription: 'Front door window on the right side of the vehicle.',
  },
  {
    id: 'right_rear_door',
    label: 'Right rear door glass',
    ukDescription: 'Rear door window on the right side of the vehicle.',
  },
  {
    id: 'right_front_vent',
    label: 'Right front vent',
    ukDescription: 'Small vent or quarter pane forward of the right front door, where fitted.',
  },
  {
    id: 'left_front_vent',
    label: 'Left front vent',
    ukDescription: 'Small vent or quarter pane forward of the left front door, where fitted.',
  },
  {
    id: 'right_rear_quarter',
    label: 'Right rear quarter',
    ukDescription: 'Fixed or opening quarter glass behind the right rear door area.',
  },
  {
    id: 'left_rear_quarter',
    label: 'Left rear quarter',
    ukDescription: 'Fixed or opening quarter glass behind the left rear door area.',
  },
  {
    id: 'tailgate_glass',
    label: 'Tailgate glass',
    ukDescription: 'Rear hatch or tailgate glazing (not the main rear windscreen unless that is your only rear glass).',
  },
];

export function glassLabelById(id: string): string {
  return UK_CAR_GLASS_OPTIONS.find((g) => g.id === id)?.label ?? id;
}
