<template>
    <div id="app">
      <header>
        <nav id="menu">
          <div @click="clickMenu" class="mobile-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <a class="logo">
            <span>Docs Agile</span></a
          >
          <ul class="nav-list">
            <li><router-link @click="clickMenu" to="/" exact>Scrum</router-link></li>
            <li><router-link @click="clickMenu" to="/kanban" exact>Kanban</router-link></li>
          </ul>
          <div class="select-wrapper">
            <select name="" id="" v-model="$i18n.locale">
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </nav>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <h4>
          <a
            href="https://github.com/joao-belmiro"
            target="_blank"
            rel="noopener noreferrer"
            >joao-belmiro</a
          >
          - V 0.1
        </h4>
      </footer>
    </div>
  </template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const active = ref('active')

    function clickMenu () {
      const nav = document.querySelector('.nav-list')
      if (!nav.classList.contains(active.value)) {
        nav.classList.toggle(active.value)
      } else {
        nav.classList.remove(active.value)
      }
    }

    return {
      active,
      clickMenu
    }
  }
})
</script>
  <style lang="scss">
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 36px;
    @media (max-width: 999px) {
      scroll-padding-top: 12vh;
    }
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    @media (max-width: 999px) {
      overflow-x: hidden;
    }
  }
  #app {
    font-family: $global-font;
  }
  header {
    width: 100%;
    z-index: 3;
    @media (max-width: 999px) {
      position: sticky;
      z-index: 1;
      top: 0;
    }
    nav {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 8vh;
      background-color: $blue;
      @media (max-width: 999px) {
        width: 95%;
        justify-content: flex-start;
        column-gap: 5%;
        padding-left: 5%;
      }
      .logo {
        font-size: 22px;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-decoration: none;
        font-family: $logo-font;
        display: flex;
        align-items: center;
        cursor: pointer;
        @media (max-width: 999px) {
          font-size: 16px;
          letter-spacing: 2px;
          z-index: 2;
        }
        &:hover {
          opacity: 0.7;
        }

        @media (max-width: 999px) {
          font-size: normal;
          padding-right: 16px;
        }
        span {
          color: $background;
        }
      }

      .mobile-menu {
        display: none;
        cursor: pointer;

        @media (max-width: 999px) {
          display: block;
          z-index: 2;
          padding: 5px;
          &:hover {
            opacity: 0.7;
          }
        }

        div {
          width: 32px;
          height: 2px;
          background: $background;
          margin: 8px;
        }
      }

      .nav-list {
        display: flex;
        list-style: none;

        @media (max-width: 999px) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: $blue;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          transform: translateY(-100%);
          transition: 0.3s ease-in-out;
          padding-bottom: 16px;
          z-index: 1;
        }
        li {
          letter-spacing: 3px;
          margin-left: 32px;
          @media (max-width: 999px) {
            margin-left: 0;
            opacity: 0;
          }

          a {
            text-align: center;
            position: relative;
            text-decoration: none;
            color: $background;
            display: inline-block;
            padding-top: 10px;
            padding-bottom: 5px;
            overflow-x: hidden;
            &:hover {
              color: $background;
            }
            &:before {
              content: "";
              position: absolute;
              bottom: 0;
              transition: transform 0.5s ease;
              height: 2px;
              background: $background;
              transform: translateX(-100%);
            }
            &:hover:before{
              width: 100%;
              transform: translateX(0);
            }

            &.router-link-exact-active::before {
              width: 100%;
              transform: translateX(0);
            }
          }
        }
      }
      .select-wrapper {
        position: absolute;
        right: 0;
        margin-right: 16px;
        width: 5%;
        @media (max-width: 999px) {
          width: 15%;
          z-index: 2;
        }
        select {
          background: $blue;
          border: 0.75px solid $grey;
          font-size: 13px;
          color: $background;
          height: 40px;
          border-radius: 5px;
          line-height: 18px;
          width: 100%;
          &:focus-visible {
            outline: none;
          }
          option {
            color: $background;
            background-color: $primary;
            padding: 10px;
            &:checked {
              background-color: $primary;
              color: $dark;
            }
          }
        }
      }
      .active {
        transform: translateY(0);
        &.nav-list {
          top: 8vh;
          li {
            opacity: 1;
          }
        }
      }
    }
  }
  main {
    min-height: 86vh;
    background-color: $background;
  }
  footer {
    background-color: $blue;
    text-align: center;
    color: $background;

    h4 {
      font-size: 15px;
      @media (max-width: 999px) {
        font-size: 12px;
      }

      line-height: 8vh;

      a {
        text-decoration: none;
        color: $contrast;
        &hover {
          opacity: 0.7;
        }
      }
    }
  }
  </style>
