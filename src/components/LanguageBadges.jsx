import { languages } from "../../data/languages";
import clsx from "clsx";

export default function LanguageBadges({ wrongGuessCount }) {
  return (
    <section className="badges">
      {languages.map((language, index) => {
        const isLost = wrongGuessCount >= index + 1;

        return (
          <span
            className={clsx("chip", { lost: isLost })}
            key={language.name}
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
          >
            {language.name}
          </span>
        );
      })}
    </section>
  );
}
