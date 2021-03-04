<template>
  <div class="project">
    <h3 class="project_title">{{ item.name }}</h3>
    <br />
    <p class="project_description">{{ item.description }}</p>
    <br />
    <div class="project_footer">
      <a :href="item.html_url" target="_blank">Github repo</a>
      <p>{{ item.language }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object(),
  },
}
</script>

<style lang="scss">
@import '../assets/scss/theme.scss';

.project {
  background-color: var(--backgroundColor);
  color: var(--textColor);

  box-sizing: content-box;

  justify-content: center;
  display: flex;
  flex-direction: column;

  border-radius: 25px;

  min-width: 300px;
  width: calc(33% - 60px);
  height: 10rem;

  @media (max-width: 750px) {
    width: 100%;
  }

  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);

  padding: 20px;

  .project_description,
  .project_title {
    margin: 0;
    padding: 0;
  }

  .project_title {
    text-align: center;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }

  .project_footer {
    display: flex;
    align-items: center;
    flex-direction: row;

    p {
      margin-left: auto;
    }
  }
}
</style>
