<script>
	import Tooltip from "$lib/Tooltip.svelte";
</script>

<header>
	<img
		class="avatar"
		src="https://im-beast.rocks/images/mat.jpg"
		height="128"
		alt="Beast's avatar - Mat from Pat & Mat"
	/>

	<section class="introduction">
		<h1>Hi, I'm Beast</h1>

		<hr />

		<p>
			I am 17 years old high school student who's really enjoying programming.
			<br />
			I've been learning it for over 7 years and still have lots of passion around it.
			<br />
			I'm coding in my free time apart from watching serials and movies

			<Tooltip message={"TMDB profile\nIm-Beast"}>
				<a href="https://www.themoviedb.org/u/Im-Beast" target="_blank">🍿</a>
			</Tooltip>.
		</p>

		<address>
			<Tooltip message={"Github profile\nIm-Beast"}>
				<a href="https://github.com/Im-Beast" target="_blank">
					<img src="/branding/github.svg" alt="Github logo" />
				</a>
			</Tooltip>

			<Tooltip message={"Discord\nBeast#6968"}>
				<img src="/branding/discord.svg" alt="Discord logo" />
			</Tooltip>

			<Tooltip message={"Twitter profile\n1m_Beast"}>
				<a href="https://twitter.com/1m_Beast" target="_blank">
					<img src="/branding/twitter.svg" alt="Twitter logo" />
				</a>
			</Tooltip>

			<Tooltip message={"Steam profile\nIm_Beast"}>
				<a href="https://steamcommunity.com/id/im_beast" target="_blank">
					<img src="/branding/steam.svg" alt="Steam logo" />
				</a>
			</Tooltip>
		</address>
	</section>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		gap: 1rem;

		background-color: var(--translucent-contrast-color);

		padding: 1rem;

		max-width: 50rem;

		@media only screen and (max-width: 640px) {
			flex-direction: column;
		}

		@media only screen and (min-width: 640px) {
			border-radius: 0 0 1rem 1rem;

			> .introduction > p {
				max-width: 60vw;
			}
		}

		> .avatar {
			border-radius: 40px;
			height: 100%;
			max-height: 7rem;
		}

		> .introduction {
			> address {
				display: flex;
				flex-direction: row;
				flex: 1;

				align-items: center;

				margin-top: 0.5rem;
				margin-left: auto;
				padding: 0.3rem 0.6rem;
				gap: 0.5rem;

				width: min-content;
				height: 2rem;

				border-radius: 1rem;
				background-color: var(--translucent-contrast-color);

				img {
					height: 100%;
					transition: filter 0.15s;

					&:hover {
						filter: drop-shadow(0 0 3px var(--primary-color));
					}

					&:active {
						filter: drop-shadow(0 0 3px var(--tertiary-color));
					}
				}
			}
		}
	}
</style>
