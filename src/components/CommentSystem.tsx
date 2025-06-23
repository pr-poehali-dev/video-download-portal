import { useState } from "react";
import Icon from "@/components/ui/icon";
import FeatureCard from "./FeatureCard";

interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: string;
  likes: number;
}

const CommentSystem = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Режиссёр Ужасов",
      text: "Отличная идея для сериала! Нужно добавить больше психологического напряжения в третьем эпизоде.",
      timestamp: "2 часа назад",
      likes: 5,
    },
    {
      id: 2,
      author: "Сценарист Мрака",
      text: "Финальная сцена получилась слишком предсказуемой. Предлагаю неожиданный поворот.",
      timestamp: "5 часов назад",
      likes: 3,
    },
  ]);

  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: "Создатель Кошмаров",
        text: newComment,
        timestamp: "только что",
        likes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  return (
    <FeatureCard
      title="💀 Система Комментариев"
      description="Обсуждение сериалов с командой"
      icon="💬"
      className="animate-float"
    >
      {/* Add comment form */}
      <div className="space-y-3">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Поделитесь своими жуткими идеями..."
          className="w-full p-3 rounded-lg bg-secondary/50 border border-primary/30 text-foreground placeholder-muted-foreground resize-none h-20"
        />
        <button
          onClick={addComment}
          className="halloween-button flex items-center gap-2"
          disabled={!newComment.trim()}
        >
          <Icon name="Send" size={16} />
          Отправить в Бездну
        </button>
      </div>

      {/* Comments list */}
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-secondary/30 rounded-lg p-4 border border-primary/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-primary text-sm">
                👤 {comment.author}
              </span>
              <span className="text-xs text-muted-foreground">
                {comment.timestamp}
              </span>
            </div>
            <p className="text-sm text-foreground mb-2">{comment.text}</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Heart" size={12} />
                {comment.likes}
              </button>
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Ответить
              </button>
            </div>
          </div>
        ))}
      </div>
    </FeatureCard>
  );
};

export default CommentSystem;
