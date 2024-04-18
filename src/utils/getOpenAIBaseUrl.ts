export default function getOpenAIBaseUrl() {
  return process.env.OPENAI_API_PROXY || 'https://api.aiguoguo199.com';
}
