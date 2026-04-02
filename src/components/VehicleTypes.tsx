import { Car, Truck, Bus } from 'lucide-react';

export function VehicleTypes() {
  return (
    <section className="relative border-t border-slate-100 bg-slate-50/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900">
            <span className="bg-gradient-to-r from-violet-700 to-blue-600 bg-clip-text text-transparent">
              ALL VEHICLES
            </span>{' '}
            WELCOME
          </h2>
          <p className="text-xl text-slate-600">From Supercars to Commercial Vans</p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-violet-200/60 bg-white/95 p-8 shadow-[0_8px_40px_-12px_rgba(79,70,229,0.12)] md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-600/[0.04] via-transparent to-blue-600/[0.04]" />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-stretch md:justify-between md:gap-0">
            <div className="flex-1 space-y-3 text-center md:px-4">
              <div className="mb-2 inline-flex rounded-full border border-violet-100 bg-violet-50 p-4">
                <Car className="h-10 w-10 text-violet-700" />
              </div>
              <h3 className="text-2xl font-bold text-violet-800">Luxury Cars</h3>
              <p className="text-slate-600">
                Lamborghini, Ferrari, Porsche, Mercedes G-Wagon, Range Rover
              </p>
            </div>

            <div
              className="hidden h-auto w-px shrink-0 bg-gradient-to-b from-transparent via-violet-200 to-transparent md:block"
              aria-hidden
            />

            <div className="flex-1 space-y-3 text-center md:px-4">
              <div className="mb-2 inline-flex rounded-full border border-blue-100 bg-blue-50 p-4">
                <Truck className="h-10 w-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">All Vehicles</h3>
              <p className="text-slate-600">
                Small Cars, Family Vehicles, SUVs, Vans, Commercial Vehicles
              </p>
            </div>

            <div
              className="hidden h-auto w-px shrink-0 bg-gradient-to-b from-transparent via-blue-200 to-transparent md:block"
              aria-hidden
            />

            <div className="flex-1 space-y-3 text-center md:px-4">
              <div className="mb-2 inline-flex rounded-full border border-red-100 bg-red-50 p-4">
                <Bus className="h-10 w-10 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-red-800">We Come To You</h3>
              <p className="text-slate-600">
                Home, office, or roadside — anywhere in London and all around Greater London
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
