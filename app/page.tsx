"use client";

import { useEffect, useRef, useState } from "react";

type Example = "habits" | "focus" | "palette";
const examples: Record<
  Example,
  {
    label: string;
    name: string;
    prompt: string;
    note: string;
    blueprint: string[];
  }
> = {
  habits: {
    label: "Habit tracker",
    name: "Little by little",
    note: "A little progress, every day.",
    prompt:
      "Build a minimal habit tracker. Let me check off daily habits, see my progress, and celebrate when everything is done. Make it feel calm and a little playful.",
    blueprint: [
      "Start with three achievable daily habits.",
      "Toggle each habit and calculate today's progress.",
      "Celebrate a complete day. Make every control keyboard accessible.",
    ],
  },
  focus: {
    label: "Focus timer",
    name: "One thing at a time",
    note: "Make a little room for deep work.",
    prompt:
      "Build a distraction-free focus timer with 25-minute work sessions and 5-minute breaks. Add start, pause, and reset controls, a progress ring, and a gentle completion message.",
    blueprint: [
      "Offer a 25-minute focus session and a 5-minute break.",
      "Track elapsed time accurately, including in background tabs.",
      "Support pause, resume, and reset. Announce when a session ends.",
    ],
  },
  palette: {
    label: "Palette maker",
    name: "A good combination",
    note: "Find the colors for your next what-if.",
    prompt:
      "Build a playful color palette generator. Show five harmonious colors with their hex codes, let me shuffle the palette, and copy any color with a click. Keep it simple and responsive.",
    blueprint: [
      "Display five colors with readable hex labels.",
      "Cycle through a set of thoughtfully paired palettes.",
      "Copy individual colors and clearly confirm the action.",
    ],
  },
};
const palettes = [
  ["#DDF2C5", "#A9C989", "#527052", "#E8C9AB", "#272E24"],
  ["#D6E5FA", "#82A6D5", "#345C8C", "#F7D879", "#242C3B"],
  ["#F5DAD6", "#DC9694", "#A74752", "#E7E9D3", "#38312F"],
  ["#E5DDF5", "#B6A3D3", "#695287", "#D0EBAD", "#292332"],
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  const [selected, setSelected] = useState<Example>("habits");
  const [view, setView] = useState<"preview" | "blueprint">("preview");
  const [checked, setChecked] = useState([true, false, false]);
  const [seconds, setSeconds] = useState(25 * 60);
  const [duration, setDuration] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const deadline = useRef(0);
  const [palette, setPalette] = useState(0);
  const [notice, setNotice] = useState("");
  const [replaying, setReplaying] = useState(false);
  const replayTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const noticeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = examples[selected];
  const completed = checked.filter(Boolean).length;

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      const remaining = Math.max(
        0,
        Math.ceil((deadline.current - Date.now()) / 1000),
      );
      setSeconds(remaining);
      if (remaining === 0) setRunning(false);
    };
    tick();
    const interval = setInterval(tick, 250);
    return () => clearInterval(interval);
  }, [running]);

  useEffect(
    () => () => {
      if (replayTimeout.current) clearTimeout(replayTimeout.current);
      if (noticeTimeout.current) clearTimeout(noticeTimeout.current);
    },
    [],
  );

  function announce(message: string) {
    setNotice(message);
    if (noticeTimeout.current) clearTimeout(noticeTimeout.current);
    noticeTimeout.current = setTimeout(() => setNotice(""), 3500);
  }

  async function copy(text: string, message: string) {
    try {
      await navigator.clipboard.writeText(text);
      announce(message);
    } catch {
      announce("Copy unavailable. You can select and copy the text directly.");
    }
  }

  function choose(example: Example) {
    setSelected(example);
    setView("preview");
    setReplaying(false);
    if (replayTimeout.current) clearTimeout(replayTimeout.current);
  }

  function replay() {
    setView("preview");
    setReplaying(true);
    if (selected === "habits") setChecked([false, false, false]);
    if (selected === "focus") {
      setRunning(false);
      setSeconds(duration);
    }
    if (selected === "palette")
      setPalette((value) => (value + 1) % palettes.length);
    replayTimeout.current = setTimeout(() => setReplaying(false), 800);
  }

  function changeDuration(minutes: number) {
    setRunning(false);
    setDuration(minutes * 60);
    setSeconds(minutes * 60);
  }

  return (
    <>
      <a className="skip-link" href="#playground">
        Skip to playground
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#" aria-label="How to Build home">
          <span className="brand-mark" aria-hidden="true">
            h<span>↗</span>
          </span>
          howtobuild<span className="brand-dot">.app</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#playground">The playground</a>
          <a href="#process">The process</a>
          <a
            className="source-link"
            href="https://github.com/jiangyan/howtobuildapp-site"
            target="_blank"
            rel="noreferrer"
          >
            View source <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section
          className="hero wrap"
          id="playground"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="tiny-star" aria-hidden="true">
                ✳
              </span>{" "}
              A PLAYGROUND FOR THE POSSIBLE
            </div>
            <h1 id="hero-title">
              Small idea.
              <br />
              <span className="idea-word">
                Real app.
                <svg
                  viewBox="0 0 460 25"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4 17Q200 -2 454 11M35 23Q275 8 425 18" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              That thing you wish existed?
              <br />
              You can build it. A little curiosity. A little AI.
              <br className="desktop-break" /> A whole lot of possibility.
            </p>

            <div className="prompt-workbench">
              <div className="workbench-label">
                <span className="mono">01 / PICK A WHAT-IF</span>
                <span className="small-arrow" aria-hidden="true">
                  ↓
                </span>
              </div>
              <div className="example-options" aria-label="Choose an example">
                {(Object.keys(examples) as Example[]).map((key, index) => (
                  <button
                    key={key}
                    className={
                      selected === key
                        ? "example-option active"
                        : "example-option"
                    }
                    aria-pressed={selected === key}
                    onClick={() => choose(key)}
                  >
                    <span aria-hidden="true">{["☑", "◷", "◐"][index]}</span>
                    {examples[key].label}
                  </button>
                ))}
              </div>
              <div className="prompt-box">
                <span className="prompt-symbol" aria-hidden="true">
                  ↳
                </span>
                <p>{current.prompt}</p>
                <button
                  className="run-button"
                  onClick={replay}
                  disabled={replaying}
                  aria-label="Run this example"
                >
                  <Arrow />
                </button>
              </div>
              <p className="demo-disclosure">
                Working examples, made with AI. Try one. No live AI calls.
              </p>
            </div>
          </div>

          <div className="preview-stage">
            <div className="stage-grid" aria-hidden="true" />
            <div className="stage-caption mono">
              <span>02 / MEET YOUR LITTLE APP</span>
              <span>↙</span>
            </div>
            <div className="app-window">
              <div className="window-bar">
                <div className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </div>
                <span className="window-url">your-idea.app</span>
                <span className="window-spark" aria-hidden="true">
                  ✳
                </span>
              </div>
              <div className="preview-tabs" aria-label="Example view">
                <button
                  onClick={() => setView("preview")}
                  aria-pressed={view === "preview"}
                >
                  Preview
                </button>
                <button
                  onClick={() => setView("blueprint")}
                  aria-pressed={view === "blueprint"}
                >
                  The blueprint
                </button>
                <span className="live-label">
                  <i />
                  Interactive
                </span>
              </div>
              <div
                className={`mini-app ${replaying ? "replaying" : ""}`}
                aria-busy={replaying}
              >
                {view === "blueprint" ? (
                  <div className="blueprint">
                    <span className="mini-eyebrow">THE THINKING BEHIND IT</span>
                    <h2>
                      Small scope.
                      <br />
                      Useful outcome.
                    </h2>
                    <ol>
                      {current.blueprint.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <p>
                      Take the prompt on the left to your AI coding tool. Build,
                      try it, then ask for one improvement.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mini-heading">
                      <span className="mini-logo" aria-hidden="true">
                        {selected === "habits"
                          ? "✳"
                          : selected === "focus"
                            ? "◷"
                            : "◐"}
                      </span>
                      <span className="mini-eyebrow">
                        {selected === "habits"
                          ? "A FRESH START"
                          : selected === "focus"
                            ? "FIND YOUR FLOW"
                            : "FOLLOW YOUR CURIOSITY"}
                      </span>
                    </div>
                    <h2>
                      {current.name}
                      <span className="green-period">.</span>
                    </h2>
                    <p className="mini-description">{current.note}</p>

                    {selected === "habits" && (
                      <div className="habit-demo">
                        <div className="progress-label">
                          <span>Today’s little wins</span>
                          <span>{completed} of 3</span>
                        </div>
                        <div
                          className="habit-progress"
                          role="progressbar"
                          aria-label="Daily habit progress"
                          aria-valuenow={completed}
                          aria-valuemin={0}
                          aria-valuemax={3}
                        >
                          <span
                            style={{ width: `${(completed / 3) * 100}%` }}
                          />
                        </div>
                        <div className="habit-list">
                          {[
                            "Move a little",
                            "Read a few pages",
                            "Make something",
                          ].map((habit, i) => (
                            <button
                              className={`habit-row ${checked[i] ? "done" : ""}`}
                              key={habit}
                              aria-pressed={checked[i]}
                              onClick={() =>
                                setChecked((values) =>
                                  values.map((value, index) =>
                                    index === i ? !value : value,
                                  ),
                                )
                              }
                            >
                              <span className="habit-check" aria-hidden="true">
                                {checked[i] ? "✓" : ""}
                              </span>
                              <span>{habit}</span>
                              <span className="habit-icon" aria-hidden="true">
                                {["↗", "▤", "✧"][i]}
                              </span>
                            </button>
                          ))}
                        </div>
                        <div className="habit-note" aria-live="polite">
                          <span aria-hidden="true">
                            {completed === 3 ? "✴" : "↳"}
                          </span>
                          {completed === 3
                            ? "Look at you. Three little wins. A very good day."
                            : "Small steps still move you forward."}
                        </div>
                      </div>
                    )}

                    {selected === "focus" && (
                      <div className="focus-demo">
                        <div className="timer-modes">
                          <button
                            aria-pressed={duration === 1500}
                            onClick={() => changeDuration(25)}
                          >
                            Focus
                          </button>
                          <button
                            aria-pressed={duration === 300}
                            onClick={() => changeDuration(5)}
                          >
                            Short break
                          </button>
                        </div>
                        <div
                          className="timer-ring"
                          style={{
                            background: `conic-gradient(var(--lime) ${(1 - seconds / duration) * 360}deg, #e9ece5 0deg)`,
                          }}
                        >
                          <div>
                            <span
                              className="timer-digits"
                              role="timer"
                              aria-label={`${Math.floor(seconds / 60)} minutes ${seconds % 60} seconds`}
                            >
                              {String(Math.floor(seconds / 60)).padStart(
                                2,
                                "0",
                              )}
                              <span>:</span>
                              {String(seconds % 60).padStart(2, "0")}
                            </span>
                            <span className="timer-status">
                              {running
                                ? "You’ve got this."
                                : seconds === 0
                                  ? "A little time, well spent."
                                  : "One task. Your full attention."}
                            </span>
                          </div>
                        </div>
                        <div className="timer-controls">
                          <button
                            className="mini-primary"
                            onClick={() => {
                              if (seconds === 0) {
                                setSeconds(duration);
                                deadline.current = Date.now() + duration * 1000;
                              } else {
                                deadline.current = Date.now() + seconds * 1000;
                              }
                              setRunning(!running);
                            }}
                          >
                            {running
                              ? "Pause"
                              : seconds === 0
                                ? "Start again"
                                : "Start focusing"}
                            <span aria-hidden="true">
                              {running ? "Ⅱ" : "▷"}
                            </span>
                          </button>
                          <button
                            className="reset-button"
                            aria-label="Reset timer"
                            onClick={() => {
                              setRunning(false);
                              setSeconds(duration);
                            }}
                          >
                            ↺
                          </button>
                        </div>
                        <span className="sr-only" aria-live="polite">
                          {seconds === 0
                            ? "Session complete. A little time, well spent."
                            : ""}
                        </span>
                      </div>
                    )}

                    {selected === "palette" && (
                      <div className="palette-demo">
                        <div className="swatches">
                          {palettes[palette].map((color) => (
                            <button
                              style={{ background: color }}
                              key={color}
                              aria-label={`Copy color ${color}`}
                              onClick={() => copy(color, `${color} copied`)}
                            >
                              <span>{color}</span>
                            </button>
                          ))}
                        </div>
                        <div className="palette-actions">
                          <p>Tap a color to copy it.</p>
                          <button
                            className="mini-primary"
                            onClick={() =>
                              setPalette(
                                (value) => (value + 1) % palettes.length,
                              )
                            }
                          >
                            Mix it up <span aria-hidden="true">⤨</span>
                          </button>
                        </div>
                        <div className="habit-note">
                          <span aria-hidden="true">✳</span>A new direction is
                          just a click away.
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              <div className="window-footer">
                <span>IMAGINED BY A HUMAN. BUILT WITH AI.</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="floating-sticker">
              <span aria-hidden="true">↖</span> yes, it actually works
            </div>
            <div className="stage-bottom">
              <span className="mono">NO BIG TEAM. JUST A START.</span>
              <button
                onClick={() =>
                  copy(current.prompt, "Prompt copied. Make it your own.")
                }
              >
                Steal this prompt <Arrow diagonal />
              </button>
            </div>
          </div>
        </section>

        <div
          className="ticker"
          aria-label="Think it. Describe it. Build it. Make it yours."
        >
          <div>
            <span>THINK IT</span>
            <i>✳</i>
            <span>DESCRIBE IT</span>
            <i>✳</i>
            <span>BUILD IT</span>
            <i>✳</i>
            <span>MAKE IT YOURS</span>
            <i>✳</i>
            <span className="ticker-extra" aria-hidden="true">
              THINK IT
            </span>
          </div>
        </div>

        <section
          className="process wrap"
          id="process"
          aria-labelledby="process-title"
        >
          <div className="section-heading">
            <div>
              <span className="eyebrow">LESS MYSTERY. MORE MAKING.</span>
              <h2 id="process-title">
                You bring the spark.
                <br />
                AI helps with the rest.
              </h2>
            </div>
            <p>
              You don’t need the whole plan.
              <br />
              Just something worth trying.
              <br />
              Here’s a good place to start.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <div className="step-top">
                <span className="mono">01 / THE IDEA</span>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>Start with an itch.</h3>
              <p>
                A repetitive task. A missing tool. A ridiculous little idea.
                Pick one thing you wish was easier.
              </p>
              <div className="step-example">
                “I wish I had a tiny app that…”
              </div>
            </article>
            <article>
              <div className="step-top">
                <span className="mono">02 / THE CONVERSATION</span>
                <span aria-hidden="true">↳</span>
              </div>
              <h3>Say it like a human.</h3>
              <p>
                Tell your AI coding tool who it’s for, what it should do, and
                how it should feel. Be specific. Start small.
              </p>
              <div className="step-example">
                “Let me do one thing really well.”
              </div>
            </article>
            <article>
              <div className="step-top">
                <span className="mono">03 / THE GOOD PART</span>
                <span aria-hidden="true">✳</span>
              </div>
              <h3>Try. Tweak. Repeat.</h3>
              <p>
                Click everything. Try it on your phone. Tell AI what feels off.
                Check the result, then share what you made.
              </p>
              <div className="step-example">
                “Nice. Now let’s make this better.”
              </div>
            </article>
          </div>
        </section>

        <section className="closing wrap">
          <div className="closing-mark" aria-hidden="true">
            ✳
          </div>
          <div>
            <span className="eyebrow">EXHIBIT A: THIS VERY WEBSITE</span>
            <h2>
              Built the way
              <br />
              we’re talking about.
            </h2>
            <p>
              A human with an idea. An AI that helped bring it to life.
              <br />
              The source is open. The next idea is yours.
            </p>
            <a
              href="https://github.com/jiangyan/howtobuildapp-site"
              target="_blank"
              rel="noreferrer"
            >
              Look under the hood <Arrow diagonal />
            </a>
          </div>
          <span className="closing-note">
            Nothing starts
            <br />
            until you do.<span aria-hidden="true">↗</span>
          </span>
        </section>
      </main>

      <footer className="site-footer wrap">
        <a className="wordmark" href="#">
          howtobuild<span className="brand-dot">.app</span>
        </a>
        <p>An independent experiment in making things.</p>
        <a href="#playground">
          Go make something <Arrow diagonal />
        </a>
      </footer>
      <div className={`toast ${notice ? "visible" : ""}`} role="status">
        {notice}
      </div>
    </>
  );
}
