<template>
  <div class="card about">
    <Card>
      <template #title> ABOUT US </template>
      <template #content>
        <ul class="listcontent">
          <li id="unfocused">
            <NuxtLink to="/home">HOME</NuxtLink>
          </li>
          <li id="coma">-</li>
          <li>ABOUT</li>
        </ul>
      </template>
    </Card>
  </div>
  <div class="aboutsection">
    <div class="parent">
      <div class="img"><img src="../assets/images/logo.png" /></div>
      <div class="text">
        <h2>About Our Store</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </div>
  </div>
  <Divider align="center" type="dotted" class="aboutdivider">
    <b class="dividertext">q&a</b>
  </Divider>
  <div class="Questions">
    <Accordion>
      <AccordionTab header="Question I">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </AccordionTab>
      <AccordionTab header="Question II">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
          modi.
        </p>
      </AccordionTab>
      <AccordionTab header="Question III">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus.
        </p>
      </AccordionTab>
      <AccordionTab header="Question VI">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
          sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
          facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus.
        </p>
      </AccordionTab>
      <AccordionTab header="Question V">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
          modi.
        </p>
      </AccordionTab>
    </Accordion>
  </div>
</template>
<script>
useHead({
  title: "HDMSTORE | About",
});
</script>
<style>
.about .p-card {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../assets/images/aboutbanner.png);
  text-align: center;
  color: white;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.p-card .p-card-title {
  font-size: 2.25rem;
  line-height: 5rem;
}

.p-card .p-card-content {
  font-weight: 600;
  color: rgba(238, 29, 35);
}

.listcontent {
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
}

#unfocused,
#coma {
  color: white;
}

#coma {
  font-weight: 900;
}

a {
  all: inherit;
  cursor: pointer;
}

div.parent {
  display: table;
  padding: 10px 20%;
  width: 100%;
  margin: 4rem 0;
}

div.text {
  vertical-align: middle;
  display: table-cell;
  text-align: justify;
  padding-left: 20px;
  padding-right: 20px;
}

div.parent .img {
  vertical-align: middle;
  display: table-cell;
  padding-right: 5px;
  padding-left: 5px;
  width: auto;
}

div.img img {
  height: 20rem;
  vertical-align: middle;
  background: rgb(5, 170, 247);
  border-radius: 20px;
  border: 7px white;
  border-style: solid;
  --tw-shadow: 0 20px 20px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.text h2 {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  padding-bottom: 20px;
  font-family: fantasy;
  text-transform: uppercase;
  color: rgb(5, 170, 247);
  text-align: center;
  text-shadow: 2px 2px darkblue;
}
.text p {
  font-style: italic;
  padding-left: 0.75rem;
  border-color: #46a6eb9b;
  border-width: 0px 0px 0px 2px;
  font-weight: 400;
  font-size: large;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-style: solid;
}
.aboutdivider {
  color: blue;
}
.dividertext {
  text-transform: uppercase;
  font-size: 2.25rem;
  line-height: 5rem;
}
.p-divider {
  color: blueviolet;
  text-shadow: 2px 2px rgba(0, 107, 139, 0.329);
}
.p-divider.p-divider-horizontal:before {
  border-top: 13px #70b8ff;
  border-top-style: dotted;
}
.Questions {
  display: table;
  padding: 20px 20% 50px 20%;
  width: 100%;
  margin: 4rem 0;
}
.p-accordion-content {
  background-color: #70b8ff !important;
  font-style: oblique;
}
</style>
