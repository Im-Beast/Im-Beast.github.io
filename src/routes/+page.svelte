<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<main>
	<header>
		<img src="https://avatars.githubusercontent.com/u/47059999" alt="mat" />
		<h1>Hello, I'm <span class="highlight">Beast</span></h1>
	</header>

	<section id="contact">
		<h1>Get in contact</h1>

		{#snippet contactCard(options: {
			title: string;
			icon: string;
			color: string;
			info?: string;
			href?: string;
			handler?: () => void;
		})}
			<section class="contact-card" style:--color={options.color}>
				<div class="actions">
					<div class="info">
						{options.info}
					</div>

					{#if options.href}
						<a href={options.href} target="_blank" class="open" on:click={options.handler}>
							<Icon icon="material-symbols:open-in-new-rounded" />
						</a>
					{:else}
						<button class="open" on:click={options.handler}>
							<Icon icon="material-symbols:open-in-new-rounded" />
						</button>
					{/if}
				</div>

				<h2 class="title">
					<Icon icon={options.icon} />
					{options.title}
				</h2>
			</section>
		{/snippet}

		<section id="contact-details">
			{@render contactCard({
				title: "E-mail",
				icon: "material-symbols:mail",
				color: "#606080",
				info: "franik.mateusz@gmail.com",
				href: "mailto:franik.mateusz@gmail.com",
			})}

			{@render contactCard({
				title: "PGP key",
				icon: "material-symbols:key",
				color: "#f0b020",
				info: "Fingerprint:\n64CF B782\n6005 6D59\n7D55 27AB\n6A64 1064\nE78F AA6E",
				href: "https://keys.openpgp.org/vks/v1/by-fingerprint/64CFB78260056D597D5527AB6A641064E78FAA6E",
			})}

			{@render contactCard({
				title: "GitHub",
				icon: "simple-icons:github",
				color: "#1a1f25",
				href: "https://github.com/Im-Beast",
			})}
		</section>
	</section>

	<section id="sponsor">
		<h1>Sponsor me!</h1>
		<h2>If you want of course</h2>

		{#snippet cryptoSponsorCard(options: {
			title: string;
			icon: string;
			color: string;
			pros: string[];
			cons: string[];
		})}
			<section class="sponsor-card" style:--color={options.color}>
				<div class="actions">
					<button class="qr-code">
						<Icon icon="material-symbols:qr-code-scanner-rounded" />
					</button>
				</div>

				<h2 class="title">
					<Icon icon={options.icon} />
					{options.title}
				</h2>
				<section class="list">
					{#if options.pros?.length}
						<div class="pros">
							<h2>Pros:</h2>
							<ul class="pros">
								{#each options.pros as arg}
									<li>{arg}</li>
								{/each}
							</ul>
						</div>
					{/if}

					{#if options.cons?.length}
						<div class="cons">
							<h2>Cons:</h2>
							<ul class="cons">
								{#each options.cons as arg}
									<li>{arg}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</section>
			</section>
		{/snippet}

		<section id="sponsor-details">
			{@render cryptoSponsorCard({
				color: "#F26822",
				icon: "simple-icons:monero",
				title: "Monero",
				pros: ["Anonymous", "ASIC Resistant", "Low transaction fee"],
				cons: [],
			})}
			{@render cryptoSponsorCard({
				color: "#F7931A",
				icon: "simple-icons:bitcoin",
				title: "Bitcoin",
				pros: [],
				cons: ["Trace-able", "Huge power waste", "High transaction fee"],
			})}
			{@render cryptoSponsorCard({
				color: "#497493",
				icon: "simple-icons:ethereum",
				title: "Ethereum",
				pros: [],
				cons: ["High transaction fee"],
			})}
		</section>
	</section>
</main>

<style>
	@keyframes reveal {
		from {
			width: 100%;
		}

		to {
			width: 0;
		}
	}

	@keyframes highlight {
		from {
			background-position: -10%;

			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}

		to {
			background-position: 100%;

			-webkit-background-clip: text;
			background-clip: text;
			color: transparent;
		}
	}

	.highlight {
		background: linear-gradient(155deg, var(--fg-color) 0%, #ff43ff 25%, #ff00ff 50%, #ff0000 75%, #ff4343);
		background-size: 900%;
		animation: highlight 1250ms ease-out forwards;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 16px;

		& > header {
			position: relative;
			align-self: center;

			text-align: center;

			& > img {
				width: 50%;
				border-radius: 24px;
			}

			&::after {
				content: "";
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 100%;

				animation: reveal 750ms ease-in forwards;
			}

			& > h1 {
				font-size: 2rem;

				background: linear-gradient(155deg, var(--fg-color), #808080);

				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
			}
		}

		& > #sponsor,
		& > #contact {
			& > h1 {
				font-size: 1.5rem;
			}

			& > h2 {
				font-size: 0.8rem;
				color: #cacaca;
				padding-left: 4px;
			}
		}

		& > #contact {
			& > #contact-details {
				margin-top: 8px;
				display: flex;
				flex-wrap: wrap;

				gap: 16px;
				height: 100%;

				& > .contact-card {
					position: relative;

					display: flex;
					flex-direction: column;
					padding: 16px;
					border-radius: 24px;

					background: linear-gradient(135deg, var(--color), color-mix(in srgb, var(--color), var(--fg-color) 20%));

					transition: transform 450ms var(--bounce-curve);

					& > .actions {
						position: absolute;
						content: "";

						top: 0;
						left: 0;
						min-width: 100%;
						width: calc-size(calc-size(max-content, size), size + 24px);
						min-height: 100%;
						height: calc-size(calc-size(max-content, size), size + 24px);
						border-radius: 24px;

						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						background: inherit;
						backdrop-filter: blur(16px);
						visibility: hidden;
						opacity: 0;
						transition: opacity 450ms var(--bounce-curve);

						& > .info {
							white-space: pre-line;

							color: white;
							pointer-events: none;
							text-align: center;
							font-weight: 500;
						}

						& > .open {
							cursor: pointer;
							color: white;
							font-size: 2rem;
							line-height: 0;
							text-shadow: 0 0 2px black;
							appearance: none;
							background: none;
							border: none;
						}
					}

					&:hover {
						transform: scale(110%);
						border-radius: 24px;

						z-index: 1;

						& > .actions {
							visibility: visible;
							opacity: 1;
							text-overflow: auto;
						}
					}

					& > .title {
						color: white;
						user-select: none;
						display: flex;
						align-items: center;
						gap: 8px;
					}
				}
			}
		}

		& > #sponsor {
			& > #sponsor-details {
				margin-top: 8px;
				display: flex;
				flex-wrap: wrap;

				gap: 16px;
				height: 100%;

				& > .sponsor-card {
					position: relative;

					display: flex;
					flex-direction: column;
					padding: 16px;
					border-radius: 24px;
					gap: 8px;

					background: linear-gradient(135deg, var(--color), color-mix(in srgb, var(--color), var(--fg-color) 20%));

					transition: transform 450ms var(--bounce-curve);

					& > .actions {
						position: absolute;
						content: "";

						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border-radius: 24px;

						display: flex;
						justify-content: center;
						align-items: center;

						opacity: 0;
						backdrop-filter: blur(16px);
						transition: opacity 450ms var(--bounce-curve);

						& > .qr-code {
							cursor: pointer;
							color: white;
							font-size: 4rem;
							line-height: 0;
							text-shadow: 0 0 2px black;
							appearance: none;
							background: none;
							border: none;
						}
					}

					&:hover {
						transform: scale(110%);
						border-radius: 24px;

						& > .actions {
							opacity: 1;
						}
					}

					& > .title {
						color: white;
						user-select: none;
						display: flex;
						align-items: center;
						gap: 8px;
					}

					& > .list {
						user-select: none;
						display: flex;
						font-size: 80%;

						ul {
							list-style-type: none;
						}

						.pros,
						.cons {
							h2 {
								font-size: 1rem;
							}
						}

						.pros > h2 {
							color: #00ff00;
						}

						.cons > h2 {
							color: #ff0000;
						}
					}
				}
			}
		}
	}
</style>
