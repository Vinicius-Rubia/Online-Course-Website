import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Router } from "./routes/router";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="online-course-website-theme">
        <Router />
        <ModeToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
