# Domain model

The product holds no stored records. The only content is a fixed greeting shown to every visitor.

```mermaid
erDiagram
    GREETING {
        string text "Hello, World (fixed)"
    }
```