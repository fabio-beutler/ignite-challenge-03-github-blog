import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${({ theme }) => theme['blue']};
	}

	body {
		background-color: ${({ theme }) => theme['base-background']};
		color: ${({ theme }) => theme['base-text']};
		-webkit-font-smoothing: antialiased;
		line-height: 1.6;
	}

	body, input, textarea, button {
		font: 400 1rem 'Nunito', sans-serif;
	}

	/* width */
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #888;
		border-radius: 999px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #555;
}`;
