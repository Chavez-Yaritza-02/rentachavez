export function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-slate-900">
            Cabañas Chávez
          </p>
          <p className="text-slate-600">
            Atención personalizada para tu próxima escapada.
          </p>
        </div>
        <div className="flex flex-col gap-1 text-slate-600 sm:items-end">
          <p className="font-medium text-slate-900">Contacto</p>
          <p>Tel: +52 (000) 000 0000</p>
          <p>Email: hola@cabanaschavez.com</p>
        </div>
      </div>
    </footer>
  );
}
