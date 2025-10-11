# TMA Vocab - Implementation Checklist

## ✅ Completed

- [x] Folder structure created
- [x] API routes scaffolded
- [x] Telegram auth helpers
- [x] Gemini AI integration
- [x] TypeScript types defined
- [x] Middleware for subdomain routing

## 🚧 TODO: Frontend Components

### Required Components

1. **VocabGenerator** - Main form
   - Topic input
   - Difficulty selector
   - Language picker
   - Generate button

2. **FlashCard** - Display card
   - Term/definition display
   - Flip animation
   - Example sentence
   - Synonyms list

3. **SavedCards** - User collection
   - List of saved cards
   - Search/filter
   - Delete card

4. **TMALayout** - Telegram integration
   - Initialize WebApp
   - Theme integration
   - Main button handling

### Hooks Needed

- `useTelegramWebApp()` - TMA initialization
- `useVocabGenerator()` - Generate logic
- `useSavedCards()` - Fetch/manage collection

## 🎨 Styling

- Use Telegram's color scheme from WebApp API
- Responsive design (mobile-first)
- Dark mode support
- Loading states and animations

## 🔧 Integration Steps

1. Install Telegram WebApp types:
   ```bash
   npm install @twa-dev/types
   ```

2. Add Telegram script to layout:
   ```html
   <script src="https://telegram.org/js/telegram-web-app.js"></script>
   ```

3. Initialize WebApp on mount

4. Test in Telegram dev environment

## 📝 Notes

- Keep UI simple and fast
- Minimize API calls
- Cache generated cards locally
- Handle offline mode gracefully
