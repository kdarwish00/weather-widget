# 🌤 Weather Widget App

This is a weather-themed authentication app built with **Next.js 14 (App Router)** and **Supabase Auth**. It includes email-based sign-up, login, password reset, and a playful weather widget that changes style dynamically based on the simulated weather state.

---

## 🚀 Features

-  ✅ **Email-based authentication** using Supabase
-  ✅ **Client-side + Server-side session handling** with middleware
-  ✅ **Password reset**
-  ✅ **Dynamic weather widget** that animates weather states (Clear, Frosty, Hot)
-  ✅ **Protected routes** with reusable auth guards
-  ✅ **Modular component and container structure**
-  ✅ **Material UI + Tailwind hybrid styling**
-  ✅ **Form validation and error feedback**
-  ✅ **Lazy loading and SSR optimisation**

---

## 🔧 Technologies Used

-  **Next.js 14** (App Router)
-  **Supabase Auth**
-  **Material UI (MUI)**
-  **Tailwind CSS**
-  **TypeScript**

---

## 📁 Project Structure

```bash
/app
  ├── (authPages)      # Grouped layout for login/signup pages
    ├── login
    ├── signup
  ├── forgot-password
  ├── reset-password    
  └── weather           # Authenticated page

/components
  ├── containers        # Container components for page logic
    ├── WeatherContainer.tsx
    ├── ResetPasswordContainer.tsx
    ├── ForgotPasswordContainer.tsx
    ├── LoginContainer.tsx
    ├── SignupContainer.tsx
  └── WeatherWidget     # Fully modular weather components (Ground, Sky, Clock, etc.)
  └── forms # Forms used in project (login/signup, reset password, forgot password)


/utils
  ├── auth             # Reusable auth guards and actions
    ├── authActions.ts
    ├── requireAuth.ts
  └── supabase          # Client/server instantiation

/public/img             # Assets
```

---

## 🧠 Implementation Decisions & Rationale

### 🔐 Authentication & Session Handling

This project uses **cookie-based authentication** with Supabase rather than relying on `localStorage`.

#### Why Cookies?

-  **Server-Side Rendering (SSR) Compatibility**
   Cookies are accessible on both the client and server, enabling secure SSR pages and accurate redirects based on user authentication state.

-  **Improved Security**
   Session tokens stored in cookies (especially if marked `HttpOnly`) are less vulnerable to XSS attacks compared to `localStorage`.

-  **Supabase Best Practices**
   This follows Supabase’s [recommended pattern](https://supabase.com/docs/guides/auth/server-side/nextjs) for managing auth with the Next.js App Router.

#### Auth Guards

Protected pages use reusable helpers defined in `utils/auth/requireAuth.ts`:

-  `requireUser()` – ensures the user is logged in before accessing sensitive pages (e.g. `/weather`)

If the user is missing or invalid, the functions safely redirect to `/login`. This centralised logic avoids repetition and enforces consistent session handling across routes.

### 2. **Component Structure**

-  I followed a **container/presentational pattern** where each page delegates logic to a container (`WeatherContainer`, `ResetPasswordContainer`) and rendering is done by modular components.
-  This separation simplifies testing and future scalability.

### 3. **UI Library Choices**

-  I used **Material UI (MUI)** for its accessibility and theming support.
-  However, I found that using `sx` for styling in larger components led to **cluttered JSX** and poor readability.
-  In future projects, I would abstract common elements like `FormInput`, `PrimaryButton`, and `AlertBox` into **custom components** with consistent design tokens.

### 4. **Layout Reuse**

-  Login and Signup share the same `AuthForm` component but were also grouped under an **App Router layout** (`(authPages)/layout.tsx`) to prevent repeated rendering of shared wrappers like Paper/Box.
-  This improves **performance** and **reduces duplication**.

---

## 🧪 Testing & Validation

-  Forms include real-time validation and error handling (e.g. password mismatch, email in use).
-  Edge cases like expired tokens, invalid credentials, and session expiry are handled gracefully.
-  UI feedback is provided using **MUI Alerts** and button states.

---

## 📦 Future Improvements

-  Add unit tests using **Jest** and **React Testing Library**
-  Support for **OAuth login**
-  Implement global `useAuth` context
-  Create **shared UI system** (button, modal, input) using MUI + Tailwind
-  Use an API for weather data so we can create a better experience

---

## 💡 Why This Approach?

This project was structured with **scalability, readability, and security** in mind. I balanced the power of full server-side protection via Supabase with client-side UX enhancements like lazy-loaded widgets and immediate feedback.

By combining **Next.js App Router patterns**, reusable utilities, and scoped UI libraries, I ensured the codebase is ready to scale with minimal refactoring.

---

## 🧑‍💻 Author

Built by **Khaled Darwish**
