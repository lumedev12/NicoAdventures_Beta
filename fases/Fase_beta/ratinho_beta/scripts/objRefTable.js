const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Behaviors.solid,
		C3.Behaviors.Bullet,
		C3.Plugins.Keyboard,
		C3.Behaviors.TileMovement.Cnds.IsMoving,
		C3.Behaviors.TileMovement.Cnds.IsMovingDirection,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Bullet.Acts.SetSpeed,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.System.Cnds.Every
	];
};
self.C3_JsPropNameTable = [
	{cenario: 0},
	{Sprite: 0},
	{MovimentoEmGrid: 0},
	{Nico: 0},
	{Sólido: 0},
	{Sprite4: 0},
	{Projétil: 0},
	{municao: 0},
	{arma: 0},
	{Teclado: 0},
	{Sprite3: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{direcao: 0}
];

self.InstanceType = {
	cenario: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Nico: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	municao: class extends self.ISpriteInstance {},
	arma: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {}
}