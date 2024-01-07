import { createRouter, createWebHistory } from "vue-router";

import AddForm from "@/views/add-form.vue";
import TransactionList from "@/views/transation-list.vue";
import Analytics from "@/views/analytics.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "TransactionList",
      component: TransactionList,
    },
    {
      path: "/analytics",
      name: "Analytics",
      component: Analytics,
    },

    // {
    //   path: "/SEO&LeadGeneration/SEOServices",
    //   name: "SeoServices",
    //   component: () => import("../views/seo/seo-services.vue"),
    // },

    // {
    //   path: "/WhoWeAre/ContactInfo",
    //   name: "ContactInfo",
    //   component: () => import("../views/who-we-are/contact-info.vue"),
    // },
    // {
    //   path: "/WhoWeAre/AboutUs",
    //   name: "AboutUs",

    //   component: () => import("../views/who-we-are/about-us.vue"),
    // },
    // {
    //   path: "/WhoWeAre/Careers(WeAreHiring!)",
    //   name: "Careers",
    //   component: () => import("../views/who-we-are/careers.vue"),
    // },
    // {
    //   path: "/WhoWeAre/THODMCReviews",
    //   name: "Reviews",
    //   component: () => import("../views/who-we-are/reviews.vue"),
    // },
    // {
    //   path: "/WhoWeAre/Portfolio&CaseStudies",
    //   name: "Portfolio",
    //   component: () => import("../views/who-we-are/portfolio.vue"),
    // },

    // //ux
    // {
    //   path: "/UX&Interactive/UXWebsiteDesign",
    //   name: "UXWebsiteDesign",
    //   component: () =>
    //     import("../views/ux/ux-interactive/ux-website-design.vue"),
    // },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/404/not-found.vue"),
    },
  ],
});

export default router;
