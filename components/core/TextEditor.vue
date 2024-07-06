<template>
  <div class="w-full mt-4">
    <div v-if="editor" class="flex flex-row items-center gap-x-2">
      <Button
        size="sm"
        :variant="editor.isActive('bold') ? 'default' : 'outline'"
        type="button"
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('font-bold') }"
      >
        <Icon name="lucide:bold" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        :variant="editor.isActive('italic') ? 'default' : 'outline'"
        type="button"
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <Icon name="lucide:italic" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        type="button"
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <Icon name="lucide:strikethrough" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        :variant="
          editor.isActive('heading', { level: 1 }) ? 'default' : 'outline'
        "
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        <Icon name="lucide:heading-1" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('text-2xl', { level: 2 }) }"
      >
        <Icon name="lucide:heading-2" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        type="button"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('text-xl', { level: 3 }) }"
      >
        <Icon name="lucide:heading-3" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        type="button"
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <Icon name="lucide:undo" class="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="outline"
        type="button"
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <Icon name="lucide:redo" class="w-4 h-4" />
      </Button>
    </div>
    <TiptapEditorContent :editor="editor" />
  </div>
</template>

<script lang="ts" setup>
const editor = useEditor({
  extensions: [TiptapStarterKit],
  editorProps: {
    attributes: {
      class:
        "prose dark:prose-invert prose-sm my-2 focus:outline-none border p-2 rounded-md",
    },
  },
});

onMounted(() => {
  if (!!unref(editor)) {
    unref(editor).commands.setContent("<p>Start writing...</p>");
  }
});

onBeforeUnmount(() => {
  unref(editor).destroy();
});
</script>
