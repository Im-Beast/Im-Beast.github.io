<script>
	import Projects from "$lib/Projects.svelte";
	import Contact from "$lib/Contact.svelte";
	import Donate from "$lib/Donate.svelte";
	import Footer from "$lib/Footer.svelte";

	let currentTab = Projects;

	$: tabDisplayName = currentTab === Projects ? "Projects" : "Donate";
</script>

<header>
	<img
		id="profile-picture"
		src="images/mat.jpg"
		alt="Beast's avatar - Mat from Pat & Mat"
		width="128px"
		height="128px"
	/>
	<section id="about">
		<h1>
			Hello, my name is Mateusz <abbr title="also known as">aka</abbr> Beast
		</h1>
		<p>
			And I'm 17 years old high school student who's really enjoying programming.
			<br />
			I've been learning it for over 7 years now and still have lots of passion around it.
			<br />
			I'm coding in my free time apart from watching serials and movies
			<a
				title="Check my profile on TMDB"
				href="https://www.themoviedb.org/u/Im-Beast"
				target="_blank">🍿</a
			>.
		</p>
	</section>
</header>
<main>
	<div id="tab-info">
		<h2>
			{tabDisplayName}
		</h2>
		<section id="tabs-navigation">
			<button
				title="Show list of github projects"
				style:margin-left={0}
				on:click={() => (currentTab = Projects)}
			>
				Github Projects
			</button>
			<button title="Show ways to help me out" on:click={() => (currentTab = Donate)}>Donate</button
			>
		</section>
	</div>

	<hr />
	<section>
		<svelte:component this={currentTab} />
	</section>
</main>
<Contact />
<Footer />

<style>
	header {
		flex-direction: row;
		justify-content: center;
		align-items: center;

		color: var(--secondary);
	}

	#profile-picture {
		border-radius: 0.75rem;
		border: 0.25rem solid var(--gray-dark);
		max-width: 100%;
		max-height: 11rem;
		margin: 0.5rem;
	}

	#about {
		padding: 0.75rem;
		font-size: 1.1rem;

		width: 100%;
	}

	#about > p {
		font-size: 1.2rem;
		margin-top: 0.5rem;
	}

	@media (max-width: 600px) {
		#profile-picture {
			max-width: 100%;
			max-height: 16rem;
		}

		header {
			flex-direction: column;
		}
	}

	main {
		flex-direction: column;
		padding: 0.5rem;
	}

	#tab-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
