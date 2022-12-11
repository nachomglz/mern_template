const logger = {
  log: (message: string): void => {
    console.log('📥 ~ ', message)
  },
  success: (message: string): void => {
    console.log('✅ ~ ', message)
  },
  error: (message: string): void => {
    console.log('❌ ~ ', message)
  },
  warn: (message: string): void => {
    console.log('⚠️ ~ ', message)
  }
}

export default logger
