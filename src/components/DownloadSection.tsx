import { useState } from "react";
import Icon from "@/components/ui/icon";

const DownloadSection = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setDownloading(false);

    // Open Yandex Disk link in new tab
    window.open("https://disk.yandex.ru/d/nXfdbqH6BRO9bQ", "_blank");
  };

  return (
    <section className="text-center py-16 relative">
      {/* Spooky background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-ghost absolute top-4 left-8 text-3xl opacity-30">
          🦇
        </div>
        <div
          className="floating-ghost absolute top-8 right-12 text-2xl opacity-40"
          style={{ animationDelay: "1.5s" }}
        >
          🕷️
        </div>
        <div
          className="floating-ghost absolute bottom-8 left-1/4 text-4xl opacity-35"
          style={{ animationDelay: "2.5s" }}
        >
          🕸️
        </div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="horror-text text-4xl md:text-5xl text-primary mb-6 spooky-flicker">
          💀 Скачать Проект 💀
        </h2>

        <p className="text-lg text-muted-foreground mb-8 font-roboto">
          Экспортируйте все данные своего жуткого проекта: сценарии,
          комментарии, планы и результаты тестов
        </p>

        <div className="halloween-card max-w-md mx-auto mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">📝 Комментарии</span>
              <span className="text-green-400">✓ Готово</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">📅 Планы проектов</span>
              <span className="text-green-400">✓ Готово</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                🧪 Результаты тестов
              </span>
              <span className="text-green-400">✓ Готово</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">🎬 Данные сериалов</span>
              <span className="text-green-400">✓ Готово</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          disabled={downloading}
          className="halloween-button text-xl px-8 py-4 relative overflow-hidden group"
        >
          <div className="flex items-center justify-center gap-3">
            {downloading ? (
              <>
                <Icon name="Loader2" className="animate-spin" />
                <span>Готовим Кошмары...</span>
              </>
            ) : (
              <>
                <Icon name="Download" className="group-hover:animate-bounce" />
                <span>Скачать Проект Ужасов</span>
                <span className="text-2xl">🎃</span>
              </>
            )}
          </div>

          {/* Animated background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-accent to-primary opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </button>

        <p className="text-xs text-muted-foreground mt-4">
          💻 Совместимо со всеми форматами • 👻 Безопасный экспорт
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </section>
  );
};

export default DownloadSection;
