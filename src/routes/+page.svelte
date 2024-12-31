<script lang="ts">
	import ExpandableCard from "$lib/ExpandableCard.svelte";
	import QrExpandableCard from "$lib/QrExpandableCard.svelte";
	import Icon from "@iconify/svelte";

	const howOldAmI = Math.floor((Date.now() - new Date(2005, 5, 17).valueOf()) / 1000 / 60 / 60 / 24 / 365.25);
</script>

<main>
	<header>
		<div id="avatar-display">
			<img id="avatar-blur" src="/avatar.png" alt="mat" />
			<img id="avatar" src="/avatar.png" alt="mat" />
		</div>
		<h1>Hello, I'm <span class="highlight">Beast</span></h1>
		<p>I'm a {howOldAmI} years old student that likes to code</p>
	</header>

	<section id="contact">
		<h1>Get in contact</h1>

		<section id="contact-details">
			<ExpandableCard interaction="link" href="mailto:franik.mateusz@gmail.com" color={["#606080", "#404060"]}>
				{#snippet title()}
					Email
				{/snippet}

				{#snippet body()}
					franik.mateusz@gmail.com
				{/snippet}

				{#snippet info()}
					Press to mail
				{/snippet}

				{#snippet background()}
					<div style="display: contents; font-size: 125%;">
						<Icon icon="ion:ios-mail" />
					</div>
				{/snippet}
			</ExpandableCard>

			<ExpandableCard
				interaction="link"
				href="https://keys.openpgp.org/vks/v1/by-fingerprint/64CFB78260056D597D5527AB6A641064E78FAA6E"
				color={["#f0b020", "#703010"]}
			>
				{#snippet title()}
					PGP Key
				{/snippet}

				{#snippet body()}
					franik.mateusz@gmail.com <br />
					<code> 64CF B782 <wbr /> 6005 6D59 <wbr /> 7D55 27AB <wbr /> 6A64 1064 <wbr /> E78F AA6E</code>
				{/snippet}

				{#snippet info()}
					Press to download
				{/snippet}

				{#snippet background()}
					<Icon icon="ion:key" />
				{/snippet}
			</ExpandableCard>

			<ExpandableCard interaction="link" href="https://github.com/Im-Beast" color={["#1a1f25", "#111210"]}>
				{#snippet title()}
					GitHub
				{/snippet}

				{#snippet body()}
					im-beast
				{/snippet}

				{#snippet info()}
					Press to open
				{/snippet}

				{#snippet background()}
					<Icon icon="ion:logo-github" />
				{/snippet}
			</ExpandableCard>

			<ExpandableCard interaction="link" href="https://t.me/lm_beast" color={["#2AABEE", "#124E79"]}>
				{#snippet title()}
					Telegram
				{/snippet}

				{#snippet body()}
					lm_beast
				{/snippet}

				{#snippet info()}
					Press to open
				{/snippet}

				{#snippet background()}
					<Icon icon="icon-park-outline:telegram" />
				{/snippet}
			</ExpandableCard>

			<ExpandableCard interaction="none" color={["#5865F2", "#182562"]}>
				{#snippet title()}
					Discord
				{/snippet}

				{#snippet body()}
					im_beast
				{/snippet}

				{#snippet info()}
					<strong>no link :(</strong> <br />
					just type it on discord
				{/snippet}

				{#snippet background()}
					<Icon icon="ic:baseline-discord" />
				{/snippet}
			</ExpandableCard>
		</section>
	</section>

	<section id="sponsor">
		<h1>Sponsor me!</h1>
		<h2>If you want of course</h2>

		<section id="sponsor-details">
			<ExpandableCard
				interaction="link"
				href="https://github.com/sponsors/Im-Beast"
				color={["#1a1f25", "#0a0f15"]}
				backgroundOpacity="80%"
			>
				{#snippet title()}
					<Icon icon="simple-icons:github" /> GitHub
				{/snippet}

				{#snippet body()}
					<ul class="pros">
						<li>No fees</li>
					</ul>
				{/snippet}

				{#snippet info()}
					Press to open
				{/snippet}

				{#snippet background()}
					<Icon icon="simple-icons:github" />
				{/snippet}
			</ExpandableCard>

			<ExpandableCard
				interaction="link"
				href="https://revolut.me/imbeast"
				color={["#161616", "#000000"]}
				backgroundOpacity="100%"
			>
				{#snippet title()}
					<Icon icon="simple-icons:revolut" /> Revolut
				{/snippet}

				{#snippet body()}
					<ul class="pros">
						<li>No fees</li>
					</ul>
				{/snippet}

				{#snippet info()}
					Press to open
				{/snippet}

				{#snippet background()}
					<Icon icon="simple-icons:revolut" />
				{/snippet}
			</ExpandableCard>

			<QrExpandableCard
				color={["#F26822", "#A23812"]}
				crypto="Monero"
				address="89BoVWjqdGVe68wdxbYurXR8sXaEb96eWKYRPxdT6wSCfZYK6XSHoj5ZRXQLtd7GzL2B2PD7Lb7GSKupkXMWjQVFAEb1CK8"
				qrImagePath="/monero-donate-qr.png"
			>
				{#snippet title()}
					<Icon icon="simple-icons:monero" /> Monero
				{/snippet}

				{#snippet body()}
					<ul class="pros">
						<li>Anonymous</li>
						<li>ASIC Resistant</li>
						<li>Low transaction fee</li>
					</ul>
				{/snippet}

				{#snippet background()}
					<Icon icon="simple-icons:monero" />
				{/snippet}
			</QrExpandableCard>

			<QrExpandableCard
				color={["#F7931A", "#A7631A"]}
				crypto="Bitcoin"
				qrImagePath="/bitcoin-donate-qr.png"
				address="bc1qphsgfytfm03p4f3ygfaqeq2lpzsaalgvwt5a3w"
			>
				{#snippet title()}
					<Icon icon="simple-icons:bitcoin" /> Bitcoin
				{/snippet}

				{#snippet body()}
					<ul class="cons">
						<li>Traceable</li>
						<li>Huge power waste</li>
						<li>High transaction fee</li>
					</ul>
				{/snippet}

				{#snippet background()}
					<Icon icon="simple-icons:bitcoin" />
				{/snippet}
			</QrExpandableCard>

			<QrExpandableCard
				color={["#497493", "#295463"]}
				crypto="Ethereum"
				qrImagePath="/ethereum-donate-qr.png"
				address="0xCf011612a84bB7b1B8b921164090C48deF7F1eFa"
			>
				{#snippet title()}
					<Icon icon="simple-icons:ethereum" /> Ethereum
				{/snippet}

				{#snippet body()}
					<ul class="cons">
						<li>Traceable</li>
						<li>High transaction fee</li>
					</ul>
				{/snippet}

				{#snippet background()}
					<Icon icon="simple-icons:ethereum" />
				{/snippet}
			</QrExpandableCard>
		</section>
	</section>
</main>

<style>
	@keyframes reveal {
		from {
			width: 256px;
			left: calc(50% - 128px);
			border-radius: 0;
			opacity: 0;
		}

		to {
			left: 0;
			width: 100%;
			border-radius: 36px;
			opacity: 1;
		}
	}

	@keyframes pop-up {
		from {
			transform: translateY(-50px);
		}

		to {
			transform: translateY(0);
		}
	}

	main > header,
	main > section {
		animation: pop-up 1s var(--bounce-curve);
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
		font-weight: bolder;

		background: linear-gradient(155deg, var(--fg-color) 0%, #ff43ff 25%, #ff00ff 50%, #ff0000 75%, var(--accent-color));
		background-size: 900%;
		animation: highlight 1250ms ease-out forwards;
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 16px;

		max-width: 1158px;

		& > header {
			position: relative;
			align-self: center;

			text-align: center;

			width: 100%;
			border-radius: 24px;
			padding: 12px;

			background-color: var(--container-color);

			& > #avatar-display {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;

				top: 0;
				left: 0;
				width: 100%;
				height: 256px;

				border-radius: 24px;

				height: 256px;
				overflow: hidden;

				&::after {
					content: "";
					position: absolute;

					top: 0;
					height: 100%;
					animation: reveal 1s var(--bounce-curve) forwards;

					background-color: #cecdc9;
				}

				& > #avatar {
					position: relative;
					top: 0;
					height: 100%;
					z-index: 1;
				}

				& > #avatar-blur {
					position: absolute;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
					height: 100%;

					z-index: 1;

					filter: blur(4px);
				}
			}

			& > h1 {
				padding-top: 12px;
				font-size: 2rem;

				background: linear-gradient(155deg, var(--fg-color), #808080);

				-webkit-background-clip: text;
				background-clip: text;
				color: transparent;
			}
		}

		& > #sponsor,
		& > #contact {
			background-color: var(--container-color);
			border-radius: 24px;
			margin-top: 1rem;
			padding: 16px;

			& > h1 {
				font-size: 2rem;
			}

			& > h2 {
				font-size: 0.8rem;
				color: color-mix(in srgb, var(--fg-color) 80%, var(--bg-color));
				padding-left: 4px;
			}
		}

		& > #contact > #contact-details,
		& > #sponsor > #sponsor-details {
			margin-top: 8px;
			display: flex;
			flex-wrap: wrap;
			align-items: stretch;
			gap: 8px;

			& > :global(.card) {
				width: 100%;
				height: 160px;
			}
		}

		& > #contact {
			& > #contact-details {
				@media screen and (width > 320px) and (width < 480px) {
					gap: 12px;
					justify-content: space-around;

					& > :global(.card):nth-child(n + 3) {
						width: calc(50% - 8px);
						height: 140px;
					}
				}

				@media screen and (width > 480px) and (width <= 640px) {
					gap: 12px;
					justify-content: space-around;

					& > :global(.card):nth-child(n + 3) {
						width: calc(33% - 8px);
						height: 140px;
					}
				}

				@media screen and (width > 640px) {
					gap: 24px;
					justify-content: space-around;

					& > :global(.card) {
						width: calc(33% - 16px);
						height: 160px;

						&:nth-child(-n + 2) {
							width: calc(50% - 12px);
						}
					}
				}
			}
		}

		& > #sponsor {
			& > #sponsor-details {
				& > :global(.card):nth-child(n + 3) {
					min-height: max-content;
				}

				@media screen and (width > 480px) and (width <= 640px) {
					gap: 12px;
					justify-content: space-around;

					& > :global(.card):nth-child(n + 3) {
						width: calc(50% - 8px);
					}
				}

				@media screen and (width > 640px) {
					gap: 24px;
					justify-content: space-around;

					& > :global(.card) {
						width: calc(33% - 16px);
						min-height: 160px;
						height: auto;

						&:nth-child(-n + 2) {
							width: calc(50% - 12px);
						}
					}
				}

				.pros,
				.cons {
					list-style-type: disc;
					padding-left: 1rem;

					&::before {
						font-weight: bolder;
						font-size: 1.1rem;
						margin-left: -1rem;
					}

					& > li {
						font-size: 0.85rem;
					}
				}

				.pros::before {
					content: "Pros:";
					color: #00ff00;
				}

				.cons::before {
					content: "Cons:";
					color: #ff0000;
				}
			}
		}
	}
</style>
