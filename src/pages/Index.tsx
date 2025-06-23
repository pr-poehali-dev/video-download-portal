import HalloweenHeader from "@/components/HalloweenHeader";
import CommentSystem from "@/components/CommentSystem";
import PlanningSystem from "@/components/PlanningSystem";
import TestingSystem from "@/components/TestingSystem";
import DownloadSection from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-4 text-6xl opacity-10 floating-ghost">
          🎃
        </div>
        <div
          className="absolute top-1/2 right-8 text-5xl opacity-10 floating-ghost"
          style={{ animationDelay: "1s" }}
        >
          👻
        </div>
        <div
          className="absolute bottom-1/4 left-1/3 text-4xl opacity-10 floating-ghost"
          style={{ animationDelay: "2s" }}
        >
          🦇
        </div>
        <div
          className="absolute top-3/4 right-1/4 text-3xl opacity-10 floating-ghost"
          style={{ animationDelay: "1.5s" }}
        >
          🕷️
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <HalloweenHeader />

        {/* Main description */}
        <section className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="halloween-card">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-roboto">
              🎬 Профессиональная Студия Хоррор-Сериалов
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Создавайте, планируйте и тестируйте свои жуткие TV-проекты в одном
              месте. Система включает полный цикл разработки: от первых
              набросков до финального продукта.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-6">
              <div className="space-y-2">
                <div className="text-3xl">💀</div>
                <div className="text-sm text-muted-foreground">
                  Ужасающе
                  <br />
                  Просто
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🎯</div>
                <div className="text-sm text-muted-foreground">
                  Точные
                  <br />
                  Тесты
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">⚡</div>
                <div className="text-sm text-muted-foreground">
                  Быстрый
                  <br />
                  Результат
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl">🔥</div>
                <div className="text-sm text-muted-foreground">
                  Горячие
                  <br />
                  Идеи
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CommentSystem />
            <PlanningSystem />
            <TestingSystem />
          </div>
        </section>

        {/* Download Section */}
        <DownloadSection />

        {/* Footer */}
        <footer className="py-8 text-center border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            🎃 Создано с помощью темной магии программирования •
            <span className="spooky-flicker text-primary ml-2">
              Horror Series Studio 2025
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
