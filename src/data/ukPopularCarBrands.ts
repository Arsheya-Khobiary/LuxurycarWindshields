/**
 * UK market — widely registered marques (best-selling brands & common on UK roads).
 * Logo slugs match Simple Icons (https://simpleicons.org) for CDN: cdn.simpleicons.org/{slug}/hex
 * If slug is null, UI falls back to a text pill (trademark-safe).
 */
export interface UkCarBrand {
  name: string;
  /** Simple Icons slug, or null if no reliable CDN icon */
  simpleIconSlug: string | null;
}

/** Order mixes volume sellers with UK presence (no claim of exact SMMT rank). Text-only CDN fallbacks omitted. */
export const UK_POPULAR_CAR_BRANDS: UkCarBrand[] = [
  { name: 'Ford', simpleIconSlug: 'ford' },
  { name: 'Volkswagen', simpleIconSlug: 'volkswagen' },
  { name: 'Vauxhall', simpleIconSlug: 'vauxhall' },
  { name: 'BMW', simpleIconSlug: 'bmw' },
  { name: 'Mercedes-Benz', simpleIconSlug: 'mercedes' },
  { name: 'Audi', simpleIconSlug: 'audi' },
  { name: 'Toyota', simpleIconSlug: 'toyota' },
  { name: 'Nissan', simpleIconSlug: 'nissan' },
  { name: 'Kia', simpleIconSlug: 'kia' },
  { name: 'Hyundai', simpleIconSlug: 'hyundai' },
  { name: 'Peugeot', simpleIconSlug: 'peugeot' },
  { name: 'Renault', simpleIconSlug: 'renault' },
  { name: 'Škoda', simpleIconSlug: 'skoda' },
  { name: 'Land Rover', simpleIconSlug: 'landrover' },
  { name: 'MINI', simpleIconSlug: 'mini' },
  { name: 'Tesla', simpleIconSlug: 'tesla' },
  { name: 'Honda', simpleIconSlug: 'honda' },
  { name: 'Mazda', simpleIconSlug: 'mazda' },
  { name: 'Volvo', simpleIconSlug: 'volvo' },
  { name: 'Fiat', simpleIconSlug: 'fiat' },
  { name: 'SEAT', simpleIconSlug: 'seat' },
  { name: 'Dacia', simpleIconSlug: 'dacia' },
  { name: 'Citroën', simpleIconSlug: 'citroen' },
  { name: 'Jaguar', simpleIconSlug: 'jaguar' },
  { name: 'Lexus', simpleIconSlug: 'lexus' },
  { name: 'Porsche', simpleIconSlug: 'porsche' },
  { name: 'Suzuki', simpleIconSlug: 'suzuki' },
  { name: 'Mitsubishi', simpleIconSlug: 'mitsubishi' },
  { name: 'Subaru', simpleIconSlug: 'subaru' },
  { name: 'MG', simpleIconSlug: 'mg' },
  { name: 'Jeep', simpleIconSlug: 'jeep' },
  { name: 'smart', simpleIconSlug: 'smart' },
  { name: 'Polestar', simpleIconSlug: 'polestar' },
  { name: 'Bentley', simpleIconSlug: 'bentley' },
  { name: 'Aston Martin', simpleIconSlug: 'astonmartin' },
  { name: 'Lamborghini', simpleIconSlug: 'lamborghini' },
  { name: 'Ferrari', simpleIconSlug: 'ferrari' },
  { name: 'Maserati', simpleIconSlug: 'maserati' },
  { name: 'Rolls-Royce', simpleIconSlug: 'rollsroyce' },
  { name: 'McLaren', simpleIconSlug: 'mclaren' },
  { name: 'BYD', simpleIconSlug: 'byd' },
  { name: 'Infiniti', simpleIconSlug: 'infiniti' },
  { name: 'DS', simpleIconSlug: 'dsautomobiles' },
  { name: 'Opel', simpleIconSlug: 'opel' },
];
