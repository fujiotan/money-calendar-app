<template>
  <div class="app-shell">
    <header class="app-header">
      <h1>家計簿</h1>
      <nav class="nav-links">
        <RouterLink to=""></RouterLink>
        <RouterLink to=""></RouterLink>
        <RouterLink to="/">ホーム</RouterLink>
        <RouterLink to="/money/create">新規作成</RouterLink>
      </nav>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>


<style>
* {
  box-sizing: border-box;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.app-header {
  margin-bottom: 24px;
}

h1 {margin:10px;}

.nav-links {
  display: flex;
  gap:10px;
  justify-content: center;
}

.app-main {
  display: block;
}

.app-header h1, .app-header nav {margin-bottom:10px;}


* {
  box-sizing: border-box;
}

.app, .app-bottom {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 24px;
}
.app-bottom {
  grid-template-columns: 1fr;
}

@media (max-width: 768px){
  .app {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

h1 {margin:0 5px;font-size:24px;white-space: nowrap;}

.calendar-panel,
.side-panel,
.list-panel {
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.calendar-month{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.week-row,
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.week-row {
  margin-bottom: 8px;
}

.week-cell {
  text-align: center;
  font-weight: bold;
}

.day-cell {
  min-height: 72px;
  padding: 8px;
  border: 2px solid #fff;
  border-radius: 2px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
}

.day-cell.muted {
  opacity: 0.4;
  cursor: unset;
}

.day-cell.selected {
  border: 2px solid #5584ff;
  font-weight: bold;
}

.day-cell.today {
  border: 2px solid #f86a6a;
  font-weight: bold;
  color: #111;
}

.day-cell.selected {
  color: #f90;
}
.day-cell.sameMonth{
  color: #666;
}


.day-cell.day {
  min-height: auto;
  padding: 8px;
  border: 0px;
  border-radius: 2px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.week-cell:first-child > .day {
  color: #d00;
}

.week-cell:last-child > .day {
  color: #0000dd;
}


.item-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

form div {margin: 15px;}
form select, form input {padding: 5px;min-width: 150px;}

.item-form {
  display: grid;
  gap: 12px;
  margin-bottom: 24px;
}

.item-form input,
.item-form textarea,
.item-form select,
.item-form button {
  width: 100%;
  padding: 8px;
  font: inherit;
}

button, .button {
  cursor: pointer;
  margin: 5px;
}

.button-link {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: #fff;
  text-decoration: underline;
  cursor: pointer;
  font: inherit;
}

.item-list {
  width: 96%;
  display: grid;
  gap: 15px;
  padding: 0;
  margin: 0 auto;
  text-align: left;
  list-style: none;
  opacity: 100;
}

.item-list button {
  margin: 5px;
  display: inline-block;
}

.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.item-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
}

.item-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

.item-header{
  margin:10px auto 20px;
}

.item-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.completed {
  text-decoration: line-through;
  opacity: 0.6;
}

.badge {
  font-size: 12px;
  padding: 2px 6px;
  border: 1px solid #ccc;
  border-radius: 999px;
}

</style>
