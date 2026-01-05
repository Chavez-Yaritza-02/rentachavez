export function WhatsAppFloating() {
  return (
    <a
      href="https://wa.me/message/VQKEZNH6V7XLH1"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 px-3.5 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-500/35 ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-emerald-500/45 active:translate-y-0 sm:bottom-6 sm:right-6 sm:px-5"
      aria-label="Abrir WhatsApp"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 shadow-inner shadow-emerald-900/30 sm:h-10 sm:w-10">
        {/* Simple chat bubble icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12 2C6.477 2 2 6.03 2 10.994c0 1.964.688 3.776 1.866 5.253L3 22l5.937-1.807c.968.27 1.991.416 3.063.416 5.523 0 10-4.03 10-8.994S17.523 2 12 2Zm0 1.5c4.42 0 8 3.362 8 7.494 0 4.133-3.58 7.5-8 7.5-.954 0-1.874-.15-2.743-.444l-.391-.13-.402.122L5 18.84l.62-2.308.127-.472-.317-.378C4.174 14.4 3.5 12.745 3.5 10.994 3.5 6.862 7.08 3.5 12 3.5Zm-2.18 4.21-.07-.01c-.104-.014-.215-.018-.307-.018-.117 0-.24.026-.36.053-.11.023-.227.048-.332.12-.141.098-.293.241-.293.5 0 .259.163.511.186.547.022.037.321.514.74.992.44.503.907.996 1.24 1.26.197.158.388.322.58.488.554.478 1.056.914 1.81.93.236.004.477-.079.67-.168.196-.09 1.2-.58 1.2-1.45 0-.87-.745-1.28-.995-1.4l-.026-.013c-.27-.133-.553-.21-.825-.342-.205-.097-.41-.233-.619-.4l-.02-.017c-.125-.102-.228-.19-.33-.19-.055 0-.133.015-.214.043a4.378 4.378 0 0 1-.254.09c-.164.053-.339.108-.481.108-.175 0-.3-.068-.441-.174-.085-.06-.375-.3-.56-.555-.14-.192-.273-.387-.404-.585-.08-.121-.16-.242-.239-.362-.15-.226-.013-.353.096-.453.076-.071.166-.171.248-.266.083-.094.138-.171.173-.245.081-.165.023-.341-.013-.45-.02-.064-.132-.316-.32-.39-.067-.026-.15-.038-.243-.038Z" />
        </svg>
      </span>
      <span className="pr-1 text-sm font-semibold tracking-tight sm:text-base">
        Respuesta rápida
      </span>
    </a>
  );
}
