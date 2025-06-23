import Icon from "@/components/ui/icon";

const HalloweenHeader = () => {
  return (
    <header className="relative text-center py-16 overflow-hidden">
      {/* Floating ghosts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-ghost absolute top-8 left-16 text-4xl opacity-60">
          👻
        </div>
        <div
          className="floating-ghost absolute top-12 right-20 text-3xl opacity-50"
          style={{ animationDelay: "1s" }}
        >
          👻
        </div>
        <div
          className="floating-ghost absolute top-20 left-1/3 text-2xl opacity-40"
          style={{ animationDelay: "2s" }}
        >
          🎃
        </div>
      </div>

      <div className="relative z-10">
        <h1 className="spooky-text text-6xl md:text-8xl text-primary mb-4 animate-pulse">
          🎃 Хэллоуинские Страхи 🎃
        </h1>
        <div className="horror-text text-2xl md:text-3xl text-accent mb-8 spooky-flicker">
          Создавай Жуткие Сериалы
        </div>

        <div className="flex justify-center items-center gap-4 text-xl text-muted-foreground">
          <Icon name="Video" className="animate-bounce" />
          <span className="font-roboto">Система управления TV-проектами</span>
          <Icon name="Skull" className="animate-pulse" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </header>
  );
};

export default HalloweenHeader;
