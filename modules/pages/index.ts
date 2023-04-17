/*
 * @Author: zhangyanni
 * @Date: 2023-04-12 16:10:06
 * @LastEditors: zhangyanni
 * @LastEditTime: 2023-04-12 17:57:57
 * @FilePath: /my-app/modules/pages/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved.
 */
import { defineNuxtModule, extendPages } from "@nuxt/kit";
import { resolve } from "pathe";
export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      pages.push({
        name: "Test",
        path: "/test",
        file: resolve(__dirname, "./pages/test.vue"),
      });
    });
  },
});
