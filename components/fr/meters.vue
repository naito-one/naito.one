<template>
  <div lang="fr">
    <h1>Meters</h1>

    <div
      id="meters-banner-outer"
      class="w-full h-40 sm:h-64 md:h-76 rounded-md shadow mb-8 overflow-hidden"
    >
      <div id="meters-banner" class="w-full h-full"></div>
    </div>

    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">trending_down</i>
      <span>
        Vous avez du mal à
        <strong>diminuer votre consommation</strong> d'eau, gaz, mazout ou
        encore électricité ?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-1"
    >
      <i class="material-icons mr-4">eco</i>
      <span>
        Peut-être cherchez-vous à améliorer votre
        <strong>image environnementale</strong> ?
      </span>
    </div>
    <div
      class="text-gray-100 bg-naito-green-200 px-4 py-2 rounded-sm shadow-md flex justify-left items-center mb-8"
    >
      <i class="material-icons mr-4">notifications</i>
      <span>
        Ou alors vous souhaitez garder un oeil sur les
        <strong>températures de vos locaux</strong> ?
      </span>
    </div>

    <p>
      <strong>Meters</strong> a été développé spécialement pour répondre à vos
      besoins ! <br />Après l'installation de capteurs sur vos compteurs d'eau,
      gaz, mazout ou électricité, ou l'installation de capteurs de température
      dans vos locaux, <strong>Meters</strong> vous permet de suivre l'évolution
      de vos données.
    </p>

    <h2>Exploration</h2>

    <p>
      Vos données sont accessibles en tout temps par une
      <strong>interface web moderne</strong>, utilisable sur smartphone,
      tablette et ordinateur. <br />Par la plateforme web, vous pouvez visionner
      des <strong>graphiques</strong> de l'évolution de vos températures ou de
      votre consommation.
      <br />
      <a href="https://meters.ch" target="_blank" rel="noopener"
        >Se rendre sur la plateforme Meters</a
      >
    </p>

    <div class="text-gray-100 bg-gray-700 p-4 rounded-sm shadow-md mb-4">
      Maintenant, toutes les cartes sont dans vos mains. Vous pouvez avec
      aisance repérer où et quand une surconsommation se produit. Grâce à ces
      informations, en déterminer la cause devient plus facile.
    </div>

    <p>
      Vous pouvez
      <strong>télécharger vos données</strong> dans différents formats afin de
      les analyser avec vos outils favoris, ou afin de les inclure dans des
      présentations. <br />Un <strong>tableau de bord</strong> vous permet de
      sauvegarder vos graphiques les plus utiles, afin d'y accéder en un rien de
      temps.
    </p>

    <figure>
      <img
        class="md:w-168"
        src="/images/meters-app-02.jpg"
        alt="Tableau de bord Meters"
      />
    </figure>

    <h2>Signature énergétique</h2>

    <p>
      Si vous possédez un capteur de température ainsi qu'un capteur sur une
      ressource servant à chauffer un bâtiment (comme l'électricité, le gaz où
      le mazout), un outil de signature énergétique est mis à votre
      disposition.<br />
      Il vous permet de repérer les irrégularités de chauffage afin d'optimiser
      vos installation et d'économiser de l'argent.
    </p>

    <h2>Objectifs</h2>

    <p>
      Difficile de définir des objectifs de réduction de consommation
      énergétique ? Grâce à
      <strong>Meters</strong>, vous pouvez définir un objectif concret mensuel
      ou hebdomadaire afin d'être tenu au courant par email de vos avancées.
    </p>

    <h2>Alertes</h2>

    <p>
      Envie d'être averti lorsque la température d'un local est anormalement
      haute ou base ?
      <strong>Meters</strong> vous met à disposition un outils d'alertes email.
    </p>

    <figure>
      <img
        class="md:w-168"
        src="/images/meters-app-03.jpg"
        alt="Alertes Meters"
      />
    </figure>

    <h2>Pour les petits et les grands</h2>

    <p>
      <strong>Meters</strong> a été conçu pour prendre en compte les
      <strong>petites entreprises</strong> comme les <strong>grandes</strong>.
      Vous avez des ressources sur plusieurs sites ? Vous pourrez les retrouver
      sans problème au travers d'un outil de recherche intelligent.
    </p>

    <p>
      Une carte vous permet également d'avoir un aperçu rapide de l'emplacement
      de vos ressources.
    </p>

    <h2>Accès multiples</h2>

    <p>
      Besoin d'accès pour plusieurs de vos employés ? Aucun problème. Ils auront
      chacun leur tableau de bord, leurs alertes et leurs objectifs.
    </p>

    <h2>Wiki</h2>

    <p>
      Pour tout savoir sur les fonctionnalites de
      <strong>Meters</strong>, veuillez vous référer au Wiki
      <a :href="$store.getters.wikiUrl" target="_blank" rel="noopener"
        >en cliquant ici</a
      >.
    </p>

    <h2>Parmi nos clients</h2>

    <clients></clients>

    <h2>Combien ça consomme</h2>

    <p>
      Un capteur consomme <strong>&lt;1W</strong>, environ 7kWh par an.<br />
      Pour référence, 6 capteurs consomment autant que 1 écran d'ordinateur de
      catégorie énergétique A.<br />
      Nous travaillons en permenance à réduire la consommation énergétique, au
      travers de mises à jour logiciel et en choisissant du matériel moins
      énergivore.
    </p>

    <h2>Combien ça coûte</h2>

    <p>
      Intéressés par le produit ? Vous pouvez utiliser l'outil ci-dessous pour
      <strong>estimer le coût total selon vos besoins</strong>.<br />
      L'estimation inclut le prix du matériel, son installation et le service
      par mois. Le service inclut l'hébergement des données, l'accès à la
      platforme, le support et le remplacement du matériel en cas de
      défectuosité.<br />
      <i>
        Veuillez noter que les prix affichés ci-dessous ne constituent pas une
        offre et que les prix pratiqués peuvent différer. <br />Veuillez
        <a href="mailto:hello@naito.one">prendre contact avec nous</a> pour
        obtenir une offre complète gratuitement.
      </i>
    </p>
  </div>
</template>
<script>
import Clients from '~/components/clients'
export default {
  components: { Clients },
}
</script>
