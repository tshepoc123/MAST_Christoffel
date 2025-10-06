# MAST_Christoffel
# Culinary Master - Chef's Menu Manager

Culinary Master is a React Native app for chefs and restaurant owners to manage and showcase their menu. Easily add, view, and organize dishes by course, with a beautiful and intuitive interface.

## Features

- **Dashboard:** View a curated list of sample dishes and track selected menu items.
- **Create Dish:** Add new dishes with name, description, course type, and price.
- **My Menu:** Browse your custom menu, view dish details, and manage your culinary creations.
- **Persistent State:** Menu items are managed in-app using React Context.

## Screens

- **HomeScreen:** Browse sample dishes and add them to your menu.
- **AddItemScreen:** Create new dishes with a form.
- **MenuListScreen:** View all dishes you've added.
- **ItemDetailsScreen:** See detailed info about a selected dish.

## Project Structure

```
.
├── App.tsx
├── index.ts
├── src/
│   ├── types.ts
│   ├── assets/
│   │   └── images/
│   │       └── myP.png
│   ├── components/
│   │   └── Header.tsx
│   ├── context/
│   │   └── MenuContext.tsx
│   ├── navigation/
│   │   └── RootTabs.tsx
│   └── screens/
│       ├── AddItemScreen.tsx
│       ├── HomeScreen.tsx
│       ├── ItemDetailsScreen.tsx
│       └── MenuListScreen.tsx
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the app:**
   ```sh
   npm start
   ```
   or use:
   ```sh
   npm run android
   npm run ios
   npm run web
   ```

3. **Open in Expo Go** or your preferred simulator.

## Tech Stack

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Customization

- Edit sample dishes in [`HomeScreen.tsx`](src/screens/HomeScreen.tsx).
- Update menu logic in [`MenuContext.tsx`](src/context/MenuContext.tsx).
- Change UI styles in each screen's StyleSheet.

## License

This project is for educational/demo purposes.

---

Made with ❤️ for chefs and foodies!
