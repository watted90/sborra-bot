export default {
	muteCommands: () => 'bungkam / buka_bungkam',
	muteAdminOnly: () => '❌ Hanya admin yang dapat menggunakan perintah ini.',
	muteNoTarget: () => '⚠️ Tag orang yang ingin dibungkam atau balas salah satu pesannya.',
	unmuteNoTarget: () => '⚠️ Tag orang yang ingin dibuka bungkamnya atau balas salah satu pesannya.',
	muteBotImmune: () => '🤖 Anda tidak dapat membungkam bot.',
	muteGroupOwnerImmune: () => '👑 Pembuat grup tidak dapat dibungkam.',
	muteSelfDenied: () => '⚠️ Anda tidak dapat membungkam diri sendiri.',
	unmuteSelfDenied: () => '⚠️ Minta admin lain untuk membuka bungkam Anda.',
	muteAlreadyMuted: () => 'ℹ️ Pengguna ini sudah dibungkam.',
	unmuteNotMuted: () => 'ℹ️ Pengguna ini tidak sedang dibungkam.',
	muteSuccess: ({ target }) => `🔇 Pengguna dibungkam\n\n@${target} tidak akan bisa berbicara lagi di grup: pesannya akan dihapus.`,
	unmuteSuccess: ({ target }) => `🔊 Bungkam dibuka\n\n@${target} sekarang bisa menulis lagi di grup.`
}
