<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
.flex_row {
  display: flex;
}

.flex_col {
  display: flex;
  flex-direction: column;
}

.flex_center {
  justify-content: center;
  align-items: center;
}

</style>
