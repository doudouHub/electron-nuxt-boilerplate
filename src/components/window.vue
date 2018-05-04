<template>
  <div class="window">
    <header class="window-title-bar">
      <nav>
        <ul>
          <li @click="minimize()" class="minimize">
            <svg name="TitleBarMinimize" width="12" height="12" viewBox="0 0 12 12"><rect fill="#ffffff" width="10" height="1" x="1" y="6"></rect></svg>
          </li>
          <li @click="maximize()" class="maximize">
            <svg name="TitleBarMaximize" width="12" height="12" viewBox="0 0 12 12"><rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="#ffffff"></rect></svg>
          </li>
          <li @click="close()" class="close">
            <svg name="TitleBarClose" width="12" height="12" viewBox="0 0 12 12"><polygon fill="#ffffff" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon></svg>
          </li>
        </ul>
      </nav>
    </header>
    <section class="window-content">
      <slot/>
    </section>
    <footer class="window-footer"></footer>
  </div>
</template>

<script>
  import electron from 'electron'

  export default {
    name: 'app-window',
    methods: {
      close () {
        this.window.close()
      },
      maximize () {
        if (this.window.isMaximized()) {
          this.window.unmaximize()
        } else {
          this.window.maximize()
        }
      },
      minimize () {
        if (this.window.isMinimized()) {
          this.window.restore()
        } else {
          this.window.minimize()
        }
      }
    },
    data () {
      return {
        window: electron.remote.getCurrentWindow()
      }
    }
  }
</script>

<style lang="scss" scoped>
  $grey: #52575C;
  $grey-dark: #3A3F44;
  $grey-darker: #272B30;
  $dark: #161a1f;

  .window {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    background: $dark;
    overflow: hidden;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    .window-title-bar {
      order: 1;
      width: 100vw;
      align-self: flex-start;
      display: flex;
      user-select: none;
      -webkit-app-region: drag;

      nav {
        margin-left: auto;

        ul {
          list-style: none;
          display: flex;
          flex-direction: row;

          li {
            -webkit-app-region: no-drag;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            height: 22px;
            width: 28px;
            opacity: .6;
            pointer-events: auto;
            position: relative;

            &:hover {
              opacity: 1;
            }

            &.close{
              &:hover {
                background: rgba(255, 0, 0, .3);
              }
            }

            &.minimize, &.maximize{
              &:hover {
                background: $grey-darker;
              }
            }
          }
        }
      }
    }

    .window-content {
      order: 2;
      flex: 1;
      overflow-x: hidden;
      overflow-y: auto;
      background: $grey-darker;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: $grey-darker;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $dark;
        border: 2px solid $grey-darker;
        border-radius: 4px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: $grey-darker;
      }
    }

    .window-footer {
      order: 3;
      width: 100vw;
      align-self: flex-end;
      user-select: none;
    }
  }
</style>
