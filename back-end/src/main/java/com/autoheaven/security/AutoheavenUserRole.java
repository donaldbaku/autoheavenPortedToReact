package com.autoheaven.security;

import java.util.Set;

import com.google.common.collect.Sets;

public enum AutoheavenUserRole {
	USER(Sets.newHashSet()),
	ADMIN(Sets.newHashSet(AutoheavenUserPermission.USER_READ, AutoheavenUserPermission.USER_WRITE));
	
	
	private final Set<AutoheavenUserPermission> permissions;
	
	
	AutoheavenUserRole(Set<AutoheavenUserPermission> permissions) {
		this.permissions = permissions;
	}

	public Set<AutoheavenUserPermission> getPermissions() {
		return permissions;
	}
}
