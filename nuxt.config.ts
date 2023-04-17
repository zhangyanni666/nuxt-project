/*
 * @Author: zhangyanni
 * @Date: 2023-03-30 18:20:20
 * @LastEditors: zhangyanni
 * @LastEditTime: 2023-04-17 14:15:44
 * @FilePath: /my-app/nuxt.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_email}, All Rights Reserved.
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    '~~': "/<rootDir>",
    "@@": "/<rootDir>",
    "~": "/<rootDir>",
    "@": "/<rootDir>",
    "assets": "/<rootDir>/assets",
    "public": "/<rootDir>/public",
  },
  css: [
    'virtual:windi-base.css',
    'virtual:windi-components.css',
    'virtual:windi-utilities.css',
  ],
  modules: ["./modules/pages",'nuxt-windicss'],
  nitro: {
    routeRules: {
      '/api/**': {
        proxy: {
          to: 'http://localhost:3300/**',
        }
      }
    }
  }
});
