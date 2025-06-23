import { useState } from "react";
import Icon from "@/components/ui/icon";
import FeatureCard from "./FeatureCard";

interface TestResult {
  id: number;
  seriesName: string;
  episode: number;
  testType: string;
  status: "passed" | "failed" | "pending";
  score: number;
  details: string;
  date: string;
}

const TestingSystem = () => {
  const [tests] = useState<TestResult[]>([
    {
      id: 1,
      seriesName: "Проклятый Особняк",
      episode: 1,
      testType: "Тест на Ужас",
      status: "passed",
      score: 85,
      details: "Высокий уровень напряжения, отличные визуальные эффекты",
      date: "2025-01-08",
    },
    {
      id: 2,
      seriesName: "Лес Теней",
      episode: 3,
      testType: "Тест Сценария",
      status: "failed",
      score: 45,
      details: "Слабая мотивация персонажей, логические дыры в сюжете",
      date: "2025-01-07",
    },
    {
      id: 3,
      seriesName: "Городские Легенды",
      episode: 2,
      testType: "Тест Атмосферы",
      status: "pending",
      score: 0,
      details: "Ожидание результатов фокус-группы",
      date: "2025-01-09",
    },
  ]);

  const [selectedTest, setSelectedTest] = useState<TestResult | null>(null);

  const getStatusIcon = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return "✅";
      case "failed":
        return "❌";
      case "pending":
        return "⏳";
    }
  };

  const getStatusColor = (status: TestResult["status"]) => {
    switch (status) {
      case "passed":
        return "text-green-400";
      case "failed":
        return "text-red-400";
      case "pending":
        return "text-yellow-400";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <FeatureCard
      title="🧪 Система Тестирования"
      description="Результаты проверки серий"
      icon="⚗️"
      className="animate-float"
      style={{ animationDelay: "1s" }}
    >
      {/* Tests overview */}
      <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-secondary/20 rounded-lg">
        <div className="text-center">
          <div className="text-lg font-bold text-green-400">
            {tests.filter((t) => t.status === "passed").length}
          </div>
          <div className="text-xs text-muted-foreground">Прошли</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-red-400">
            {tests.filter((t) => t.status === "failed").length}
          </div>
          <div className="text-xs text-muted-foreground">Провалили</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-bold text-yellow-400">
            {tests.filter((t) => t.status === "pending").length}
          </div>
          <div className="text-xs text-muted-foreground">Ожидают</div>
        </div>
      </div>

      {/* Tests list */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-secondary/30 rounded-lg p-3 border border-primary/20 hover:bg-secondary/50 transition-colors cursor-pointer"
            onClick={() =>
              setSelectedTest(selectedTest?.id === test.id ? null : test)
            }
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg">{getStatusIcon(test.status)}</span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {test.seriesName} - Эп.{test.episode}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {test.testType}
                  </p>
                </div>
              </div>
              <div className="text-right">
                {test.status !== "pending" && (
                  <div
                    className={`text-lg font-bold ${getScoreColor(test.score)}`}
                  >
                    {test.score}%
                  </div>
                )}
                <div className={`text-xs ${getStatusColor(test.status)}`}>
                  {test.status === "passed"
                    ? "Успех"
                    : test.status === "failed"
                      ? "Провал"
                      : "Ожидание"}
                </div>
              </div>
            </div>

            {/* Expandable details */}
            {selectedTest?.id === test.id && (
              <div className="mt-3 pt-3 border-t border-primary/20 animate-accordion-down">
                <p className="text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" className="inline mr-1" size={12} />
                  {new Date(test.date).toLocaleDateString("ru")}
                </p>
                <p className="text-sm text-foreground bg-secondary/20 p-2 rounded">
                  {test.details}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* New test button */}
      <button className="halloween-button w-full flex items-center justify-center gap-2">
        <Icon name="Play" size={16} />
        Запустить Новый Тест
      </button>
    </FeatureCard>
  );
};

export default TestingSystem;
