// Theme store using Svelte 5 runes
type Theme = 'light' | 'dark';

function createThemeStore() {
	let theme = $state<Theme>('light');

	function init() {
		if (typeof window === 'undefined') return;
		const stored = localStorage.getItem('theme') as Theme | null;
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		theme = stored === 'dark' || stored === 'light' ? stored : prefersDark ? 'dark' : 'light';
		applyTheme(theme);
	}

	function applyTheme(t: Theme) {
		if (typeof document === 'undefined') return;
		document.documentElement.classList.toggle('dark', t === 'dark');
	}

	function toggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		localStorage.setItem('theme', theme);
		applyTheme(theme);
	}

	function set(t: Theme) {
		theme = t;
		localStorage.setItem('theme', t);
		applyTheme(t);
	}

	return {
		get current() {
			return theme;
		},
		get isDark() {
			return theme === 'dark';
		},
		init,
		toggle,
		set
	};
}

export const themeStore = createThemeStore();
