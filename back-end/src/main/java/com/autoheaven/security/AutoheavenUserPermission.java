package com.autoheaven.security;

public enum AutoheavenUserPermission {
	USER_READ("user:read"),
	USER_WRITE("user:write"),
	ADMIN_READ("admin:write"),
	ADMIN_WRITE("admin:read");
	
	private final String permission;
	
	private AutoheavenUserPermission(String permission) {
		this.permission = permission;
	}
	
	public String getPermission() {
		return permission;
	}

}
