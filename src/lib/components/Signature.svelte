<script lang="ts">
</script>

<h1 id="signature">
	Hello, I'm
	<span id="signature-name">
		<span id="name">Mateusz Franik</span>
		<span id="nick">Beast</span>
	</span>
</h1>

<style>
	#signature {
		display: flex;
		flex-direction: column;

		font-family: sans-serif;
		font-size: 1.25rem;

		&:hover > #signature-name {
			& > #name {
				opacity: 0%;
			}

			& > #nick {
				opacity: 100%;
			}
		}

		& > #signature-name {
			position: relative;
			font-size: 2rem;

			& > span {
				width: max-content;
				color: transparent;
				background: linear-gradient(to right, var(--accent), var(--highlight));
				background-clip: text;
				transition: opacity 150ms ease-in;
			}

			& > #nick {
				position: absolute;
				top: 0;
				left: 0;
				opacity: 0%;
			}
		}
	}
</style>
