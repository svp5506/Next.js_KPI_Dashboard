# App Store KPI Dashboard

App Store KPI Dashboard is a data visualization dashboard designed to provide actionable analytics on the performance of telecom support applications across major app stores. Built with [Next.js](https://nextjs.org/), [Tremor](https://www.tremor.so/), and [Tailwind CSS](https://tailwindcss.com/), this project is a portfolio showcase of modern, interactive, and highly customizable data visualization for business intelligence.

---

## Features

### 📊 Data Visualization

- **KPI Cards**: Instantly view key metrics such as overall app rating, customer satisfaction (CSAT), and app ranking, with visual cues for trends and changes.
- **Interactive Tables**: Explore detailed app performance data for both iOS and Android platforms, including combined and platform-specific ratings, review counts, and month-over-month (MoM) changes.
- **Line Charts**: Analyze trends over time for total reviews and 5-star reviews, with clear, responsive charts.
- **Category Bars & Progress Bars**: Visualize progress towards goals and distribution of satisfaction scores.

### 🛠️ Customization

- **Multi-Select Filters**: Select which apps to display in tables and charts, enabling focused analysis on apps of interest.
- **Responsive Layout**: Optimized for desktop and mobile, with adaptive navigation and layouts.
- **Theme & Style**: Built with Tailwind CSS for easy customization of colors, spacing, and typography. The dashboard uses a clean, modern design with subtle gradients and shadows.

### 📈 Business Intelligence

- **Comparative Analysis**: Compare app performance across platforms and over time.
- **Export Options**: (Planned) Export data in CSV, Excel, or PDF formats for further analysis or reporting.
- **Documentation & FAQ**: Integrated documentation section to help users understand metrics, features, and usage.

---

## Project Structure

```
app/
  ├─ mainChart.tsx         # Line charts for review trends
  ├─ mainTable.tsx         # Combined app performance table
  ├─ sectionKPI.tsx        # KPI summary cards
  ├─ rankKPI.tsx           # App ranking KPI card
  ├─ ratingKPI.tsx         # App rating & CSAT KPI cards
  ├─ navbar.tsx            # Responsive navigation bar
  ├─ detailed_view/
  │    ├─ androidTable.tsx # Android-specific app data
  │    ├─ iosTable.tsx     # iOS-specific app data
  │    └─ page.tsx         # Detailed view page
  ├─ documentation/
  │    ├─ faq.tsx          # FAQ accordion
  │    └─ page.tsx         # Documentation page
  ├─ layout.tsx            # Root layout and global styles
  ├─ page.tsx              # Main dashboard page
  └─ globals.css           # Tailwind and custom styles
```

---

## Customization

- **Add/Remove Apps**: Easily modify the `combinedTable` data arrays in the relevant files to add new apps or update metrics.
- **Change KPI Metrics**: Update the `CategoriesRating` and `CategoriesRank` arrays in [`sectionKPI.tsx`](app/sectionKPI.tsx) to customize which KPIs are displayed.
- **Styling**: Adjust Tailwind classes or extend the theme in [`tailwind.config.ts`](tailwind.config.ts) for branding or color changes.
- **Component Reuse**: All visualization components are modular and can be reused or extended for new data sources or metrics.

---

## Screenshots

Below are sample images demonstrating the dashboard's interactive data visualizations and customization features:


| ![Homepage](screenshots/homepage.png) | ![Detailed View](screenshots/detailed_view.png) | ![FAQ & Docs](screenshots/faq.png) |

---

## Getting Started

To run the dashboard locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Technologies Used

- **Next.js**: React framework for SSR and routing
- **Tremor**: UI components for data visualization
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Iconography
- **TypeScript**: Type safety and maintainability

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tremor Documentation](https://www.tremor.so/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Deployment

Deploy instantly on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---



## License

This project is for portfolio and demonstration purposes.
