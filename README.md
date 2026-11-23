# Календарь звонков (продолжение)

[![hexlet-check](https://github.com/Mineclinee/ai-for-developers-project-387/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Mineclinee/ai-for-developers-project-387/actions)

Учебный проект об интеграции агентов в GitHub. Здесь используется приложение из [первой части «Календаря звонков»](https://github.com/Mineclinee/ai-for-developers-project-386/tree/5f9238ddabc6590a79fcd3b6f671b4199c7f2c63).

Учебный проект Хекслета: https://ru.hexlet.io/programs/ai-for-developers
Как это должно работать: https://files.hexlet.app/a/2ipc5m

## Запуск

```bash
git clone https://github.com/Mineclinee/ai-for-developers-project-387.git
cd ai-for-developers-project-387
docker build -t hexlet-call-calendar-387 .
docker run --rm -e PORT=8080 -p 8080:8080 hexlet-call-calendar-387
```

Главная страница доступна по адресу [http://localhost:8080](http://localhost:8080). Для запуска без Docker используйте `node server.mjs`.

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
