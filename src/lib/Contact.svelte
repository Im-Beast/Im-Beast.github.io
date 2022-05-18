<script>
	import ContactTab from "./ContactTab.svelte";
</script>

<address>
	<h2>Contact</h2>
	<hr />
	<section id="contact">
		<ContactTab
			title="Discord"
			img="images/discord.svg"
			url="https://discord.com/users/415926077144432642"
			urlName="Beast#6968"
			activity="Active daily"
		/>

		<ContactTab
			title="Github"
			img="images/github.svg"
			url="https://github.com/Im-Beast"
			urlName="Im-Beast"
			activity="Active daily"
		/>

		<ContactTab
			title="Steam"
			img="images/steam.svg"
			url="https://steamcommunity.com/id/im_beast"
			urlName="Im_Beast"
			activity="Active often"
		/>

		<ContactTab
			title="Twitter"
			img="images/twitter.svg"
			url="https://twitter.com/1m_Beast"
			urlName="1m_Beast"
			activity="Active rarely"
		/>
	</section>
</address>

<style>
	address {
		flex-direction: column;
		padding: 0.5rem;
	}

	address {
		font-style: normal;
	}

	#contact {
		position: relative;
		display: flex;

		flex-direction: row;
		align-items: center;

		overflow-x: auto;

		height: 100%;
		width: 100%;
	}
</style>
